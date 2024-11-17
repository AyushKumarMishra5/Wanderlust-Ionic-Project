import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPaymentPage } from './qr-payment.page';

describe('QrPaymentPage', () => {
  let component: QrPaymentPage;
  let fixture: ComponentFixture<QrPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
