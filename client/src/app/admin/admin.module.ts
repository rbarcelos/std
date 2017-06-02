import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminGuard } from "./admin.guard";
import { ADMIN_ROUTES, ADMIN_COMPONENTS } from "./admin.routes";
import { StdCommonModule } from "../common/common.module";
import { CadastroComponent, DialogContent } from './distribuidoras/cadastro/cadastro.component';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    StdCommonModule,
    MaterialModule,
    MdInputModule,
    BrowserAnimationsModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [ADMIN_COMPONENTS, CadastroComponent, DialogContent],
  exports: [AdminComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AdminGuard],
  entryComponents: [DialogContent]
})
export class AdminModule { }
