import { ComponentFixture, TestBed } from '@angular/core/testing';

import { receiverDashboardComponent } from './receiver-dashboard.component';

describe('receiverDashboardComponent', () => {
  let component: receiverDashboardComponent;
  let fixture: ComponentFixture<receiverDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ receiverDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(receiverDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
