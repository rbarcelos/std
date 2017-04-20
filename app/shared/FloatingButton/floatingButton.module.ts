import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FloatingButtonComponent } from './floatingButton.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ FloatingButtonComponent ],
    exports: [ FloatingButtonComponent ]
})

export class FloatingButtonModule {}
