import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { StdCommonModule } from './common/common.module';
import { RouterModule } from '@angular/router';

import { DistribuidoraModule } from './distribuidora/distribuidora.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_ROUTES, APP_COMPONENTS } from './app.routes'
import { AUTH_PROVIDERS, AuthModule } from './common/auth/auth.module';
import { TransportadoraModule } from "./transportadora/transportadora.module";
import { AdminModule } from "./admin/admin.module";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    APP_COMPONENTS
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBJHoiEGfmO9sVBI_3iJbNTW4Qc_dxdnyk', region: 'BR', language: 'pt-BR', libraries: ['places'] }),
    RouterModule.forRoot(APP_ROUTES),
    DistribuidoraModule,
    TransportadoraModule,
    AdminModule,
    NgxDatatableModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
