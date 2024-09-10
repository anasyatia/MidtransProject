import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { TestComponent } from './dashboard/test.component';

export const routes: Routes = [
   {
    path: 'dashboard',
    component: TestComponent
   },
   {
    path: '***',
    redirectTo: '/login'
   }
];
