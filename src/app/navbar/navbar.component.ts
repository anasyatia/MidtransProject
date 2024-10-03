import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { TransactionSearchModalComponent } from './modal/transaction-search-modal/transaction-search-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule, TransactionSearchModalComponent]
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isSearchOpened = false;

  openSearch() {
    this.isSearchOpened = true;
  }

  closeSearch() {
    this.isSearchOpened = false;
  }
}