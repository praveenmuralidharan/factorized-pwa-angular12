import { ComponentFixture, TestBed } from '@angular/core/testing';

import { qrScannerComponent } from './qr-scanner.component';

describe('qrScannerComponent', () => {
  let component: qrScannerComponent;
  let fixture: ComponentFixture<qrScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ qrScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(qrScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
