import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'xn-root',
    template: `
        <router-outlet></router-outlet>
    `
})

export class AppComponent 
{
    constructor(router: Router) 
    {
        /*if (authentication.GetAuthenticated) {
            router.navigate(['/dashboard']);
        }*/
    }
}
