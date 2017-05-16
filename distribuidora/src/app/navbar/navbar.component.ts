import { Component, Pipe } from '@angular/core';
import { AuthService } from '../shared/services/auth.service'

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: []
})

export class NavbarComponent {
    constructor(public authService: AuthService) { }

    get empresaName() {
        if (this.authService.isAuthenticated() && this.authService.userProfile != null) {
            return this.authService.userProfile.empresa.name;
        }
    }
}
