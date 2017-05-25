import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { EmpresaType } from "../models/empresa-type.enum";

@Injectable()
export class DistribuidoraGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate() {
        if (this.auth.isAuthenticated) {
            if (this.auth.userProfile.empresa.type != EmpresaType.Distribuidora) {
                this.auth.navigateUnauthorized();
                return false;
            }

            return true;
        }

        this.auth.navigateLogin();
        return false;
    }
}