import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from "app/shared/services/authFirebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthFirebaseService]
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthFirebaseService) {
    this.authService.enableAuthentication();
  }

  ngOnInit(): void {
    this.authService.login();
  }

}
