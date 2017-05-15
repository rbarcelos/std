import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';
// import { FabModule } from './fab/fab.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { ContentComponent } from './content/content.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ContentModule,
    // FabModule,
    NavbarModule,
    SidebarModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBJHoiEGfmO9sVBI_3iJbNTW4Qc_dxdnyk', region: 'BR', language: 'pt-BR', libraries: ['places'] }),
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase, "STD"),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
