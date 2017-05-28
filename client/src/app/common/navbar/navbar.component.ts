import { RouterLink, ActivatedRoute } from '@angular/router';
import { Component, Pipe, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service'
import { Subscription } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: []
})

export class NavbarComponent implements OnInit, OnDestroy {

    @Input() isAdminMode: boolean;

    sub: Subscription;
    constructor(public authService: AuthService, private route: ActivatedRoute) {
        this.isAdminMode = false;
    }

    ngOnInit() {
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                if (params['crossModule'] == "true") {
                    window.location.replace(window.location.href.split("?")[0]);
                    window.location.reload();
                }
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
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
