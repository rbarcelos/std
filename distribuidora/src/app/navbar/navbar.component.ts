import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service'

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: [AuthService]
})

export class NavbarComponent {
    constructor(public authService: AuthService) { }


}
