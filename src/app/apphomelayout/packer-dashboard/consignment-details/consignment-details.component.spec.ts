import { ComponentFixture, TestBed } from '@angular/core/testing';

import { consignmentDetailsComponent } from './consignment-details.component';

describe('consignmentDetailsComponent', () => {
  let component: consignmentDetailsComponent;
  let fixture: ComponentFixture<consignmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ consignmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(consignmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
