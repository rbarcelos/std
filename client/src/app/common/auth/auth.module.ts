import { AuthConfigFactory } from './auth-config.factory';
import { DataService } from '../services/data.service';
import { ProfileManager } from '../models/profile.manager';
import { StdCommonModule } from '../common.module';
import { DistribuidoraGuard } from './distribuidora.guard';
import { LandingPageGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { TransportadoraGuard } from "./transportadora.guard";

@NgModule({
  imports: [
    CommonModule,
    StdCommonModule,
  ],
  exports: [LoginComponent, AuthService, LandingPageGuard, DistribuidoraGuard],
  declarations: [UnauthorizedComponent]
})
export class AuthModule { }

export const AUTH_PROVIDERS = [ProfileManager, DataService, AuthConfigFactory, AuthService, LandingPageGuard, DistribuidoraGuard, TransportadoraGuard];
