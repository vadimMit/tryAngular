import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drone-form',
  templateUrl: './drone-form.component.html',
  styleUrl: './drone-form.component.css'
})
export class DroneFormComponent {
    BATTERY_CAPACITY: number;
    MAX_WEIGHT_TO_LOAD: number;
    MODEL: String;
    SERIAL_NUMBER: String;
    STATE: String;
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router) {
  }

  onSubmit(BATTERY_CAPACITY,SERIAL_NUMBER,MAX_WEIGHT_TO_LOAD,MODEL,STATE) {
    this.router.navigate(['/registerResult'],{queryParams: {BATTERY_CAPACITY, MAX_WEIGHT_TO_LOAD, MODEL,SERIAL_NUMBER,STATE}});
    
  }

  gotoDroneList(result) {
    
  }
}