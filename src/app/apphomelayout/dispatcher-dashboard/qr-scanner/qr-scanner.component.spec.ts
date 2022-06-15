import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dispatcherQRScannerComponent } from './qr-scanner.component';

describe('dispatcherQRScannerComponent', () => {
  let component: dispatcherQRScannerComponent;
  let fixture: ComponentFixture<dispatcherQRScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dispatcherQRScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dispatcherQRScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
