import { AuthService } from './shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthConfigFactory } from "./shared/services/auth/auth-config.factory";
import { DataService } from "./shared/services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, AuthConfigFactory, AuthService]
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService) {
    this.authService.enableAuthentication();
  }

  ngOnInit(): void {
    this.authService.login();
  }

}
