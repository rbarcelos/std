import { AdminGuard } from './admin.guard';
import { Routes } from '@angular/router';

import { AdminComponent } from "./admin.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard]
    }
]


export const ADMIN_COMPONENTS = [
    AdminComponent
]
