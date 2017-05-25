import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from "../service/auth.service";

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
    this.authService.login();
  }

}
