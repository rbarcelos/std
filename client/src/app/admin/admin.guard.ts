import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../common/auth/service/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate() {
        if (this.auth.isAuthenticated) {
            // if (this.auth.userProfile.empresa.type != EmpresaType.Transportadora) {
            //     this.auth.navigateUnauthorized();
            //     return false;
            // }

            return true;
        }

        this.auth.navigateLogin();
        return false;
    }
}