import { ComponentFixture, TestBed } from '@angular/core/testing';

import { receiverConsignmentDetailsComponent } from './consignment-details.component';

describe('receiverConsignmentDetailsComponent', () => {
  let component: receiverConsignmentDetailsComponent;
  let fixture: ComponentFixture<receiverConsignmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ receiverConsignmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(receiverConsignmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
