import { Component } from '@angular/core';
import { AuthFirebaseService } from "app/shared/services/authFirebase.service";


@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: []
})

export class NavbarComponent {
    constructor(public authService: AuthFirebaseService) { }


}
