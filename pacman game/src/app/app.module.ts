import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzBadgeModule } from 'ng-zorro-antd/badge';


import en from '@angular/common/locales/en';

import { MenuComponent } from './pages/menu/menu.component';
import { ArenaComponent } from './pages/arena/arena.component';



registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DefaultComponent,
        MenuComponent,
        ArenaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NzModalModule,
        NzBadgeModule,
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }