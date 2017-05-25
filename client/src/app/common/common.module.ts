import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { ResetComponent } from './reset/reset.component';
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class StdCommonModule { }
