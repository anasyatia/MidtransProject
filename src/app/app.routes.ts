import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { TestComponent } from './dashboard/test.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BalanceComponent } from './balance/balance.component';
import { PaymentLinkComponent } from './payment-link/payment-link.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BulkHistoryComponent } from './payment-link/modal/bulk-history/bulk-history.component';
import { CreatePaymentLinkComponent } from './payment-link/modal/create-payment-link/create-payment-link.component';

export const routes: Routes = [
   {
    path: 'dashboard',
    component: TestComponent
   },
   {
    path: 'registration',
    component: RegistrationComponent
   },
   {
      path: 'balance',
      component: BalanceComponent
   },
   {
    path: 'login',
    component: LoginComponent
   },
   {
   path: 'payment-link',
   component: PaymentLinkComponent,
   // children:
   // [
   //   {
   //     path: 'bulk-history',
   //     component: BulkHistoryComponent
   //   }
   // ]
   },
   {
      path: 'bulk-history',
      component: BulkHistoryComponent
   },
   {
      path: 'create-payment-link',
      component: CreatePaymentLinkComponent
   },
   {
      path: 'invoice',
      component: InvoiceComponent
   }
];
