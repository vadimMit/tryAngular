import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCapacitySuccessComponent } from './check-capacity-success.component';

describe('CheckCapacitySuccessComponent', () => {
  let component: CheckCapacitySuccessComponent;
  let fixture: ComponentFixture<CheckCapacitySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckCapacitySuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckCapacitySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
