import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RotasComponent } from './rotas/rotas.component';
import { NotasFiscaisComponent } from './notasFiscais/notasFiscais.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const MODULE_ROUTES: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'users', component: UserComponent },
    // { path: 'table', component: TableComponent },
    // { path: 'icons', component: IconsComponent },
    // { path: 'notifications', component: NotificationsComponent },
    // { path: 'typography', component: TypographyComponent },
    { path: 'rotas', component: RotasComponent },
    { path: 'notas', component: NotasFiscaisComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '', redirectTo: 'rotas', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    // TableComponent,
    // IconsComponent,
    // NotificationsComponent,
    // TypographyComponent,
    RotasComponent,
    NotasFiscaisComponent,
    CadastroComponent,
    // NotasCadastroComponent,
]
