import { ProfileManager } from '../models/profile.manager';
import { Injectable } from '@angular/core';
import { AuthConfigFactory } from './auth-config.factory';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';

import { tokenNotExpired } from 'angular2-jwt';
import { Profile } from "../models/profile";
import { Empresa } from "../models/empresa";

@Injectable()
export class AuthService {

  lock: any;
  userProfile: Profile;
  empresaProfile: Empresa;

  constructor(public router: Router, private configFactory: AuthConfigFactory, private profileMgr: ProfileManager) {

    var authConfig = this.configFactory.createAuthConfig();
    var lockConfig = this.configFactory.createLockConfig();

    this.lock = new Auth0Lock(authConfig.clientID, authConfig.domain, lockConfig);
    this.userProfile = this.profileMgr.loadFromBrowserCache();
  }

  public login(): void {
    if (this.isAuthenticated) {
      this.navigateModule();
    }
    else {
      this.lock.hide();
      this.lock.show();
    }
  }

  // Call this method in app.component
  // if using path-based routing
  public handleAuthentication(authRouteCallback, nonAuthRouteCallback) {
    var noop = function (event: any) { };

    authRouteCallback = authRouteCallback || noop;
    nonAuthRouteCallback = nonAuthRouteCallback || noop;

    this.internalHandleAuthentication(
      (event) => {
        this.lock.resumeAuth(window.location.hash, (error, authResult) => {
          if (error) return console.log(error);
          this.setSession(authResult);
          authRouteCallback(event);
        });
      },
      nonAuthRouteCallback);
  }

  private internalHandleAuthentication(authRouteCallback, nonAuthRouteCallback) {
    this
      .router
      .events
      .filter(event => event instanceof NavigationStart)
      .filter((event: NavigationStart) => this.isAuthRoute(event))
      .subscribe(event => {
        authRouteCallback(event)
      });

    this
      .router
      .events
      .filter(event => event instanceof NavigationStart)
      .filter((event: NavigationStart) => !this.isAuthRoute(event))
      .subscribe(event => {
        nonAuthRouteCallback(event);
      });
  }

  private isAuthRoute(route: NavigationStart): boolean {
    return (/access_token|id_token|error/).test(route.url);
  }


  private setSession(authResult): void {
    // Set the time that the access token will expire at
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    this.fetchUserProfile(authResult.accessToken);
  }

  private fetchUserProfile(accessToken) {
    // Fetch profile information
    this.lock.getUserInfo(accessToken, (error, profile) => {

      if (error) {
        // Handle error
        alert(error);
        return;
      }

      profile.user_metadata = profile.user_metadata || {};
      this.profileMgr.create(profile).subscribe((result) => {
        this.userProfile = result;
        this.profileMgr.saveOnBrowserCache(this.userProfile);
        console.log(this.userProfile);
        // this.lock.hide();
        this.navigateModule();
      });
    });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this.profileMgr.clearBrowserCache();
    this.userProfile = null;
    this.navigateLogin();
  }

  public navigateModule() {
    this.router.navigate(['/' + this.userProfile.empresa.type]);
  }

  public navigateLogin() {
    this.router.navigate(['/login']);
  }

  public navigateUnauthorized() {
    this.router.navigate(['/unauthorized']);
  }

  public get isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
    return tokenNotExpired('id_token') && this.userProfile != null;
  }

}