import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminGuard } from "./admin.guard";
import { ADMIN_ROUTES, ADMIN_COMPONENTS } from "./admin.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [ADMIN_COMPONENTS],
  exports: [AdminComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AdminGuard],
})
export class AdminModule { }
