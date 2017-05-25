import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./service/auth.service";
import { EmpresaType } from "../models/empresa-type.enum";

@Injectable()
export class LandingPageGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate() {
        var res = this.auth.isAuthenticated;
        if (res) {
            this.auth.navigateModule();
        }
        else {
            this.auth.navigateLogin();
        }

        return res;
    }
}