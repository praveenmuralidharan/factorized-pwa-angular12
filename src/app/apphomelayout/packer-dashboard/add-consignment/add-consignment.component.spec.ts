import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addConsignmentComponent } from './add-consignment.component';

describe('addConsignmentComponent', () => {
  let component: addConsignmentComponent;
  let fixture: ComponentFixture<addConsignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addConsignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});