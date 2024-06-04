import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneFormResultComponent } from './drone-form-result.component';

describe('DroneFormResultComponent', () => {
  let component: DroneFormResultComponent;
  let fixture: ComponentFixture<DroneFormResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DroneFormResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DroneFormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
