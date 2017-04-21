import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { RotasComponent } from './rotas/rotas.component';
import { NotasComponent } from './notas/notas.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotasCadastroComponent } from './cadastro/notasCadastro.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'rotas', component:RotasComponent },
    { path: 'notas', component:NotasComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '', redirectTo: 'rotas', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    RotasComponent,
    NotasComponent,
    CadastroComponent,
    NotasCadastroComponent,
]
