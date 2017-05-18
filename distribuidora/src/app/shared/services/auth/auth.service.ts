import { Injectable } from '@angular/core';
import { AuthConfigFactory } from './auth-config.factory';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';

import { tokenNotExpired } from 'angular2-jwt';
import { Profile } from "app/shared/models/profile";
import { Empresa } from "app/shared/models/empresa";

@Injectable()
export class AuthService {

  lock: any;
  userProfile: Profile;

  constructor(public router: Router, private configFactory: AuthConfigFactory) {

    var authConfig = this.configFactory.createAuthConfig();
    var lockConfig = this.configFactory.createLockConfig();

    this.lock = new Auth0Lock(authConfig.clientID, authConfig.domain, lockConfig);
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
  }

  public login(): void {
    if (!this.isAuthenticated()) {
      this.lock.show();
    }
  }

  // Call this method in app.component
  // if using path-based routing
  public enableAuthentication(): void {
    this
      .router
      .events
      .filter(event => event instanceof NavigationStart)
      .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
      .subscribe(event => {
        this.lock.resumeAuth(window.location.hash, (error, authResult) => {
          if (error) return console.log(error);
          this.setSession(authResult);
        });
      });
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
      this.userProfile = Profile.fromAuth0Profile(profile);

      localStorage.setItem('profile', JSON.stringify(this.userProfile));

      console.log(this.userProfile);
      this.lock.hide();
      this.navigate(this.userProfile.empresa);
    });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = null;
    this.navigate(null);
  }

  private navigate(moduleType: Empresa) {
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
    return tokenNotExpired('id_token');
  }

}