import { Component, OnInit, Input } from '@angular/core';

import { FormDataService } from './data/formData.service';

@Component({
    selector: 'multi-step-wizard-app',
    templateUrl: 'Wizard.component.html',
    styleUrls: [
        './assets/css/riliwan-rabo.css',
        './assets/css/style.css',
        './assets/css/form.css'
    ]
})

export class WizardComponent implements OnInit {
    title = 'Multi-Step Wizard';
    @Input() formData;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    }
}