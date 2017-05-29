import { AdminGuard } from './admin.guard';
import { Routes } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { DistribuidorasComponent } from "./distribuidoras/distribuidoras.component";
import { TransportadorasComponent } from "./transportadoras/transportadoras.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            { path: 'distribuidoras', component: DistribuidorasComponent },
            { path: 'transportadoras', component: TransportadorasComponent },
            { path: '', redirectTo: 'admin/distribuidoras', pathMatch: 'full' }
        ]
    }
]


export const ADMIN_COMPONENTS = [
    AdminComponent,
    DistribuidorasComponent,
    TransportadorasComponent
]
