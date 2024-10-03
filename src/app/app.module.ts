import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './dashboard/test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DaterangepickerComponent, NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CalendarModule } from 'primeng/calendar';
import { DateRangeModalComponent } from './balance/modal/date-range-modal/date-range-modal.component';
import { TransactionSearchModalComponent } from './navbar/modal/transaction-search-modal/transaction-search-modal.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CreatePaymentLinkComponent } from './payment-link/modal/create-payment-link/create-payment-link.component';
import { CustomerDetailsComponent } from './payment-link/modal/customer-details/customer-details.component';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    SidebarComponent,
    DaterangepickerComponent,
    DateRangeModalComponent,
    TransactionSearchModalComponent,
    CreatePaymentLinkComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    routes,
    RouterModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    CommonModule,
    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
