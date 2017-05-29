import { TransportadoraGuard } from './transportadora.guard';
import { Routes } from '@angular/router';

import { TransportadoraComponent } from "./transportadora.component";
import { SidebarMenuItemInfo } from "../common/sidebar/sidebar.metadata";

export const TRANSPORTADORA_ROUTES: Routes = [
    {
        path: 'transportadora',
        component: TransportadoraComponent,
        canActivate: [TransportadoraGuard]
    }
];


export const TRANSPORTADORA_COMPONENTS = [
    TransportadoraComponent
];

export const SIDEBAR_ITEMS: SidebarMenuItemInfo[] = [

    { path: 'operadores', title: 'Operadores', icon: 'assignement_ind', class: '' },
    { path: 'notas', title: 'Notas Fiscais', icon: 'receipt', class: '' },
    { path: 'users', title: 'Emissores', icon: 'group', class: '' },
    { path: 'destinos', title: 'Destinos de entrega', icon: 'beenhere', class: '' },
    { path: 'cadastro', title: 'Cadastro', icon: 'apps', class: '' },

    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'icons', title: 'Icons', icon: 'bubble_chart', class: '' },


];
