import { TransportadoraGuard } from './transportadora.guard';
import { Routes } from '@angular/router';

import { TransportadoraComponent } from "./transportadora.component";

export const TRANSPORTADORA_ROUTES: Routes = [
    {
        path: 'transportadora',
        component: TransportadoraComponent,
        canActivate: [TransportadoraGuard]
    }
]


export const TRANSPORTADORA_COMPONENTS = [
    TransportadoraComponent
]
