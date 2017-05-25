import { Component, Pipe } from '@angular/core';
import { AuthService } from '../auth/service/auth.service'

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: []
})

export class NavbarComponent {
    constructor(public authService: AuthService) { }

    get empresaName() {
        if (this.authService.isAuthenticated) {
            return this.authService.userProfile.empresa.name;
        }
    }
}
