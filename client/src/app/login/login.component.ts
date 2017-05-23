import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from "../common/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements AfterViewInit {

  constructor(public authService: AuthService) {

  }

  ngAfterViewInit(): void {
    console.log("LoginComponent - ngAfterViewInit");
    this.authService.login();
  }

}
