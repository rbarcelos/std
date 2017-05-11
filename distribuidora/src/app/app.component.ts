import { AuthService } from './shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService) {
    this.authService.handleAuthentication();
  }

  ngOnInit(): void {
    this.authService.login();
  }

}
