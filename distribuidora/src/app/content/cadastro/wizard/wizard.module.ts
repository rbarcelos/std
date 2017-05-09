import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { UIRouterModule }     from "@uirouter/angular";
import { FormsModule } from '@angular/forms';

/* App Root */
import { WizardComponent } from './wizard.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { RouterModule } from '@angular/router';

/* App Router */
import { wizardSteps } from './wizard.steps';

/* Shared Service */
import { FormDataService } from './data/formData.service'

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        RouterModule.forChild(wizardSteps)
    ],
    providers: [{ provide: FormDataService, useClass: FormDataService }],
    declarations: [WizardComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent],
    exports: [WizardComponent]
})

export class WizardModule { }