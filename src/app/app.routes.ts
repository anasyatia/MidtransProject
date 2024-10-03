import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { TestComponent } from './dashboard/test.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RangeDateComponent } from './transactions/component/range-date/range-date.component';
import { MoreFilterComponent } from './transactions/component/more-filter/more-filter.component';
import { FilterComponent } from './transactions/component/filter/filter.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StartSetUpComponent } from './invoice/component/start-set-up/start-set-up.component';
import { PaymentMethodComponent } from './invoice/component/start-set-up/component/payment-method/payment-method.component';
import { PaymentReminderComponent } from './invoice/component/start-set-up/component/payment-reminder/payment-reminder.component';
import { IpWhitelistComponent } from './invoice/component/ip-whitelist/ip-whitelist.component';

export const routes: Routes = [
   {
    path: 'dashboard',
    component: TestComponent
   },
   {
    path: '***',
    redirectTo: '/dashboard'
   },
   {
    path: 'transactions',
    component: TransactionsComponent
   },
  {
    path:'date',
    component: RangeDateComponent
  },
  {
    path: 'more',
    component: MoreFilterComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'invoiceSetting',
    component: StartSetUpComponent
  },
  {
    path:'reminder',
    component: PaymentReminderComponent
  },
  {
    path: 'invoice/ip-whitelist',
    component: IpWhitelistComponent,
  }
];
