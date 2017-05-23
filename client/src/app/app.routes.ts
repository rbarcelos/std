import { AuthGuard } from './common/auth/auth.guard';
import { CanActivate } from '@angular/router/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const APP_ROUTES: Routes = [
    { path: '', component: AppComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
]

export const APP_COMPONENTS = [
    AppComponent,
    LoginComponent
]
