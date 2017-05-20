import { ProfileManager } from './common/models/profile.manager';
import { AuthService } from './common/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthConfigFactory } from "./common/auth/auth-config.factory";
import { DataService } from "./common/services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, ProfileManager, AuthConfigFactory, AuthService]
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService) {
    this.authService.enableAuthentication();
  }

  ngOnInit(): void {
    this.authService.login();
  }

}
