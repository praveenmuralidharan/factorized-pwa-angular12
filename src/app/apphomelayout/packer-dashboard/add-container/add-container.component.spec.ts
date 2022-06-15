import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addContainerComponent } from './add-container.component';

describe('addContainerComponent', () => {
  let component: addContainerComponent;
  let fixture: ComponentFixture<addContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});