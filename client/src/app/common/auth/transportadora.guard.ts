import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { EmpresaType } from "../models/empresa-type.enum";

@Injectable()
export class TransportadoraGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate() {
        if (this.auth.isAuthenticated) {
            return this.auth.userProfile.empresa.type == EmpresaType.Transportadora;
        }

        this.router.navigate(['/unauthorized']);
        return false;
    }
}