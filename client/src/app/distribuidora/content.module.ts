import { AuthService } from '../common/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './content.routes';


import { RotasComponent } from './rotas/rotas.component';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';
import { InfoWindowContentComponent } from './mapa/info-window-content/info-window-content.component';
import { MomentModule } from 'angular2-moment';
import { NfeCardComponent } from './nfe-card/nfe-card.component';

import { WizardModule } from './cadastro/wizard/wizard.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    MomentModule,
    WizardModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [RotasComponent, MapaComponent, InfoWindowContentComponent, MODULE_COMPONENTS, NfeCardComponent, CadastroComponent],
  exports: [RotasComponent],
})
export class ContentModule { }
