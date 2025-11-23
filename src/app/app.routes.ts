import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PracticeComponent } from './practice/practice.component';
import { CssPracticeComponent } from './css-practice/css-practice.component';
import { GridComponent } from './grid/grid.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { canActivateGuard } from './can-activate.guard';
import { deactivateGuard } from './deactivate.guard';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: LandingPageComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent, canDeactivate: [deactivateGuard]},
    // {path: 'practice', component: PracticeComponent},
    // {path: 'css', component: CssPracticeComponent, canActivate: [canActivateGuard]},
    {path: 'css', loadComponent: ()=> import('./css-practice/css-practice.component').then((m)=> m.CssPracticeComponent)},
    {path: 'practice', loadComponent: () => import('./practice/practice.component').then((m) => m.PracticeComponent)},
    {path: 'grid', component: GridComponent},
    {path: 'unauthorized', component: UnauthorizedComponent},
    {path: 'rxjs', component: RxjsPracticeComponent},
    {path: '**', component: PageNotFoundComponent}
];
