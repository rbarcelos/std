import { DistribuidoraGuard } from './distribuidora.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RotasComponent } from './rotas/rotas.component';
import { NotasFiscaisComponent } from './notasFiscais/notasFiscais.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DistribuidoraComponent } from "./distribuidora.component";
import { SidebarMenuItemInfo } from "../common/sidebar/sidebar.metadata";

export const DISTRIBUIDORA_ROUTES: Routes = [
    {
        path: 'distribuidora',
        component: DistribuidoraComponent,
        canActivate: [DistribuidoraGuard],
        children: [
            { path: 'dashboard', component: HomeComponent },
            { path: 'users', component: UserComponent },
            { path: 'rotas', component: RotasComponent },
            { path: 'notas', component: NotasFiscaisComponent },
            { path: 'cadastro', component: CadastroComponent },
            { path: '', redirectTo: 'rotas', pathMatch: 'full' }
        ]
    }
]

export const SIDEBAR_ITEMS: SidebarMenuItemInfo[] = [

    { path: 'rotas', title: 'Rotas', icon: 'map', class: '' },
    { path: 'notas', title: 'Notas Fiscais', icon: 'receipt', class: '' },
    { path: 'users', title: 'Emissores', icon: 'group', class: '' },
    { path: 'destinos', title: 'Destinos de entrega', icon: 'beenhere', class: '' },
    { path: 'cadastro', title: 'Cadastro', icon: 'apps', class: '' },

    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'icons', title: 'Icons', icon: 'bubble_chart', class: '' },


];

export const DISTRIBUIDORA_COMPONENTS = [
    DistribuidoraComponent,
    HomeComponent,
    UserComponent,
    RotasComponent,
    NotasFiscaisComponent,
    CadastroComponent
]
