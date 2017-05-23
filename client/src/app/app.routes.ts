import { LandingPageGuard } from './common/auth/auth.guard';
import { CanActivate } from '@angular/router/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/auth/login/login.component';
import { UnauthorizedComponent } from "./common/auth/unauthorized/unauthorized.component";

export const APP_ROUTES: Routes = [
    { path: '', component: AppComponent, canActivate: [LandingPageGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'unauthorized', component: UnauthorizedComponent }
]

export const APP_COMPONENTS = [
    AppComponent,
    LoginComponent,
    UnauthorizedComponent
]
