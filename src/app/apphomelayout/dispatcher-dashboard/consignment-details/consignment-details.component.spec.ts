import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dispatcherConsignmentDetailsComponent } from './consignment-details.component';

describe('dispatcherConsignmentDetailsComponent', () => {
  let component: dispatcherConsignmentDetailsComponent;
  let fixture: ComponentFixture<dispatcherConsignmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dispatcherConsignmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dispatcherConsignmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
