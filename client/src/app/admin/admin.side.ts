import { AdminGuard } from './admin.guard';
import { Routes } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { SidebarMenuItemInfo } from "../common/sidebar/sidebar.metadata";


export const SIDEBAR_ITEMS: SidebarMenuItemInfo[] = [
    { path: 'transportadoras', title: 'Transportadoras', icon: 'local_shipping', class: '' },
    { path: 'distribuidoras', title: 'Distribuidoras', icon: 'business', class: '' }
];

