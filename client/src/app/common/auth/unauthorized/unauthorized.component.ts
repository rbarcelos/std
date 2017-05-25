import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(public authService: AuthService, public location: Location) { }

  ngOnInit() {
  }

}
