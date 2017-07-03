import { DistribuidoraGuard } from './distribuidora.guard';
import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { DISTRIBUIDORA_COMPONENTS, DISTRIBUIDORA_ROUTES } from './distribuidora.routes';


import { RotasComponent } from './rotas/rotas.component';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';
import { InfoWindowContentComponent } from './mapa/info-window-content/info-window-content.component';
import { MomentModule } from 'angular2-moment';
import { NfeCardComponent } from './nfe-card/nfe-card.component';

import { WizardModule } from './cadastro/wizard/wizard.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DistribuidoraComponent } from "./distribuidora.component";
import { StdCommonModule } from "../common/common.module";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    MomentModule,
    WizardModule,
    StdCommonModule,
    RouterModule.forChild(DISTRIBUIDORA_ROUTES),
    NgxDatatableModule,
    MaterialModule
  ],
  declarations: [RotasComponent, MapaComponent, InfoWindowContentComponent, DISTRIBUIDORA_COMPONENTS, NfeCardComponent, CadastroComponent, DistribuidoraComponent],
  exports: [RotasComponent, DistribuidoraComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, DistribuidoraGuard],
})
export class DistribuidoraModule { }
