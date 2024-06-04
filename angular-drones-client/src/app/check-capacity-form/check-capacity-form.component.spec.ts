import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCapacityFormComponent } from './check-capacity-form.component';

describe('CheckCapacityFormComponent', () => {
  let component: CheckCapacityFormComponent;
  let fixture: ComponentFixture<CheckCapacityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckCapacityFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckCapacityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
