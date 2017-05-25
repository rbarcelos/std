import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TransportadoraComponent } from './transportadora.component';
import { TransportadoraGuard } from "./transportadora.guard";
import { TRANSPORTADORA_ROUTES, TRANSPORTADORA_COMPONENTS } from "./transportadora.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TRANSPORTADORA_ROUTES)
  ],
  declarations: [TRANSPORTADORA_COMPONENTS],
  exports: [TransportadoraComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, TransportadoraGuard],
})

export class TransportadoraModule { }
