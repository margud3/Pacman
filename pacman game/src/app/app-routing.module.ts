import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent,
        children: [
            { path: '', component: MenuComponent, pathMatch: 'full' }
        ]
    },
    {
        path: 'dashboard',
        component: DefaultComponent,
        children: [
            { path: '', component: DashboardComponent, pathMatch: 'full' }
        ]
    },
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top',
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
