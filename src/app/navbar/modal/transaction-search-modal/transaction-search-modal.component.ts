import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-search-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-search-modal.component.html',
  styleUrls: ['./transaction-search-modal.component.css'],
})
export class TransactionSearchModalComponent {
  // Date fields with initial values set to null to handle empty state
  transactionTime: Date | null = null;
  settlementTime: Date | null = null;

  selectedCurrency: string = 'IDR';
  selectedStatus: string = 'any';
  secureOption: string = 'any';

  paymentType = {
    all: true,
    bankTransfer: false,
  };

  // Dropdown data
  currencies = [
    { label: 'Indonesian Rupiah (IDR)', value: 'IDR' },
    { label: 'US Dollar (USD)', value: 'USD' },
  ];

  statuses = [
    { label: 'Any', value: 'any' },
    { label: 'Authorize', value: 'authorize' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Challenge', value: 'challenge' },
    { label: 'Chargeback', value: 'chargeback' },
    { label: 'Failure', value: 'failure' },
    { label: 'Partial Settlement', value: 'partial_settlement' },
    { label: 'Pending', value: 'pending' },
    { label: 'Settlement', value: 'settlement' },
    { label: 'Success', value: 'success' },
  ];

  // Function to handle Search button click
  onSearch() {
    // Implement search logic here
    console.log('Searching with filters:', {
      transactionTime: this.transactionTime,
      settlementTime: this.settlementTime,
      selectedCurrency: this.selectedCurrency,
      selectedStatus: this.selectedStatus,
      secureOption: this.secureOption,
      paymentType: this.paymentType,
    });
  }

  // Function to handle Clear Filter button click
  onClearFilter() {
    // Reset all fields to their default values
    this.transactionTime = null;
    this.settlementTime = null;
    this.selectedCurrency = 'IDR';
    this.selectedStatus = 'any';
    this.secureOption = 'any';
    this.paymentType = {
      all: true,
      bankTransfer: false,
    };

    console.log('Filters cleared');
  }
}