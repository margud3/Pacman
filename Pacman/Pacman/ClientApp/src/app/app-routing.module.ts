import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ArenaComponent } from './pages/arena/arena.component';
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
        path: 'arena',
        component: ArenaComponent,
        children: [
            { path: '', component: ArenaComponent, pathMatch: 'full' }
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
