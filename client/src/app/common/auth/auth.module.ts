import { AuthConfigFactory } from './service/auth-config.factory';
import { DataService } from '../services/data.service';
import { ProfileManager } from '../models/profile.manager';
import { StdCommonModule } from '../common.module';
// import { DistribuidoraGuard } from './distribuidora.guard';
import { LandingPageGuard } from './landingpage.guard';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
// import { TransportadoraGuard } from "./transportadora.guard";

@NgModule({
  imports: [
    CommonModule,
    StdCommonModule,
  ],
  exports: [LoginComponent, AuthService, LandingPageGuard],
  declarations: [UnauthorizedComponent]
})
export class AuthModule { }

export const AUTH_PROVIDERS = [ProfileManager, DataService, AuthConfigFactory, AuthService, LandingPageGuard];
