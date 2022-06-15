import { ComponentFixture, TestBed } from '@angular/core/testing';

import { receiverQRScannerComponent } from './qr-scanner.component';

describe('receiverQRScannerComponent', () => {
  let component: receiverQRScannerComponent;
  let fixture: ComponentFixture<receiverQRScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ receiverQRScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(receiverQRScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
