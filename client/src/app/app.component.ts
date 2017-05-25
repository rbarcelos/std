import { ProfileManager } from './common/models/profile.manager';
import { AuthService } from './common/auth/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthConfigFactory } from "./common/auth/service/auth-config.factory";
import { DataService } from "./common/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, ProfileManager, AuthConfigFactory, AuthService]
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {
    this.authService.handleAuthentication(
      (event) => {
        console.log("auth:" + event);
        console.log(event);
      },
      (event) => {
        console.log("noauth:" + event);
        console.log(event);
      });
  }

  ngOnInit(): void {
  }
}
