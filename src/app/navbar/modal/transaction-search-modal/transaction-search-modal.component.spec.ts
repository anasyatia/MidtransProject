import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSearchModalComponent } from './transaction-search-modal.component';

describe('TransactionSearchModalComponent', () => {
  let component: TransactionSearchModalComponent;
  let fixture: ComponentFixture<TransactionSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionSearchModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
