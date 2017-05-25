import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/service/auth.service";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
  providers: [AuthService]
})
export class ResetComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

}
