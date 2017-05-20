import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { StdCommonModule } from '../common.module';

@NgModule({
    imports: [RouterModule, CommonModule, StdCommonModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})

export class NavbarModule { }
