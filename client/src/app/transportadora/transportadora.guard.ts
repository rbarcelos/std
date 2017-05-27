import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../common/auth/service/auth.service";
import { EmpresaType } from "../common/models/empresa-type.enum";

@Injectable()
export class TransportadoraGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate() {
        if (this.auth.isAuthenticated) {
            if (this.auth.userProfile.empresa.type != EmpresaType.Distribuidora) {
                this.auth.navigateToUnauthorizedModule();
                return false;
            }

            return true;
        }

        this.auth.navigateToLoginModule();
        return false;
    }
}