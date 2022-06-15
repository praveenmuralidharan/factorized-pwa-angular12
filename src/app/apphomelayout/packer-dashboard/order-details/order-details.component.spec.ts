import { ComponentFixture, TestBed } from '@angular/core/testing';

import { orderDetailsComponent } from './order-details.component';

describe('orderDetailsComponent', () => {
  let component: orderDetailsComponent;
  let fixture: ComponentFixture<orderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ orderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(orderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
