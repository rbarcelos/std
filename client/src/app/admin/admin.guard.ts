import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../common/auth/service/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate() {
        if (this.auth.isAuthenticated) {
            if (!this.auth.userProfile.isAdmin) {
                this.auth.navigateToUnauthorizedModule();
                return false;
            }

            return true;
        }

        this.auth.navigateToLoginModule();
        return false;
    }
}