import { RouterLink } from '@angular/router';
import { Component, Pipe, Input } from '@angular/core';
import { AuthService } from '../auth/service/auth.service'

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: []
})

export class NavbarComponent {

    @Input() isAdminMode: boolean;

    constructor(public authService: AuthService) {
        this.isAdminMode = false;
    }

    get empresaName() {
        if (this.isAdminMode) {
            return "Modo Administrador";
        }

        return this.authService.userProfile.empresa.name;
    }

    public get moduleLinkToNavigate(): string {
        let link = this.authService.AdminModuleRoute;
        if (this.isAdminMode) {
            link = this.authService.MainModuleRoute;
        }

        // console.log(link);

        return link;
    }
    public get shouldAllowNavigate(): boolean {
        return this.isAdminMode || this.authService.userProfile.isAdmin;
    }

    public get moduleNameToNavigate(): string {
        if (this.isAdminMode) {
            return "ir para Dashboard";
        }
        else {
            return "ir para Modo Administrador";
        }
    }
}
