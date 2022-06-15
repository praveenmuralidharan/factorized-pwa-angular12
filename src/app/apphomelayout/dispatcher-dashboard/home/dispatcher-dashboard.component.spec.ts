import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dispatcherDashboardComponent } from './dispatcher-dashboard.component';

describe('dispatcherDashboardComponent', () => {
  let component: dispatcherDashboardComponent;
  let fixture: ComponentFixture<dispatcherDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dispatcherDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dispatcherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
