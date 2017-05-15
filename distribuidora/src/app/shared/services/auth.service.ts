import { Injectable } from '@angular/core';
import { AUTH_CONFIG, LOCK_CONFIG } from './auth-config';
import { Router, NavigationStart } from '@angular/router';
import { IAuthService } from './iauth-service';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';

import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService implements IAuthService {

  lock: any;
  userProfile: string;

  constructor(public router: Router) {
    this.lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, LOCK_CONFIG);
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
    this.lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/']);
      }
    });
    this.lock.on('authorization_error', (err) => {
      this.router.navigate(['/']);
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    });
  }

  // Call this method in app.component
  // if using hash-based routing
  public handleAuthenticationWithHash(): void {
    this
      .router
      .events
      .filter(event => event instanceof NavigationStart)
      .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
      .subscribe(() => {
        this.lock.resumeAuth(window.location.hash, (err, authResult) => {
          if (err) {
            this.router.navigate(['/']);
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
            return;
          }
          this.setSession(authResult);
          this.router.navigate(['/']);
        });
      });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    // localStorage.setItem('expires_at', expiresAt);
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
      localStorage.setItem('profile', JSON.stringify(profile));
      this.userProfile = profile;
    });
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');

    this.userProfile = null;
    // localStorage.removeItem('expires_at');
    // Go back to the home route
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