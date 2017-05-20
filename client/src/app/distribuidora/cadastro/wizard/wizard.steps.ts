import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { CadastroComponent } from '../cadastro.component';
import { Routes } from '@angular/router';


export const wizardSteps: Routes = [
    {
        path: 'cadastro',
        component: CadastroComponent,
        children:
        [
            { path: 'personal', component: PersonalComponent },
            { path: 'work', component: WorkComponent },
            { path: 'address', component: AddressComponent },
            { path: 'result', component: ResultComponent },
            { path: '', redirectTo: 'personal', pathMatch: 'full' }
        ]
    }
];
