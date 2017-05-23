// import { DistribuidoraGuard } from './shared/services/distribuidora.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { StdCommonModule } from './common/common.module';
// import { ContentModule } from './content/content.module';
// import { FabModule } from './fab/fab.module';
// import { NavbarModule } from './navbar/navbar.module';
// import { SidebarModule } from './sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

import { DistribuidoraModule } from './distribuidora/distribuidora.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthService } from "./common/auth/auth.service";
import { LoginComponent } from './common/auth/login/login.component';
import { APP_ROUTES, APP_COMPONENTS } from './app.routes'
import { LandingPageGuard } from "./common/auth/auth.guard";
import { AuthConfigFactory } from "./common/auth/auth-config.factory";
import { DataService } from "./common/services/data.service";
import { ProfileManager } from "app/common/models/profile.manager";
import { AUTH_PROVIDERS, AuthModule } from './common/auth/auth.module';

@NgModule({
  declarations: [
    APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StdCommonModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBJHoiEGfmO9sVBI_3iJbNTW4Qc_dxdnyk', region: 'BR', language: 'pt-BR', libraries: ['places'] }),
    RouterModule.forRoot(APP_ROUTES),
    DistribuidoraModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
