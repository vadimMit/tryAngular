import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DRONE } from '../drone';
import { DroneService } from '../drone-service.service';

@Component({
  selector: 'app-drone-form-result',
  templateUrl: './drone-form-result.component.html',
  styleUrl: './drone-form-result.component.css'
})
export class DroneFormResultComponent {
  drone: DRONE;
  condition = false;
  errorMesage: string;

  constructor(private route: ActivatedRoute, private droneService: DroneService) {
    this.drone = new DRONE();
    this.route.queryParams
      .subscribe(params => {
        this.drone.BATTERY_CAPACITY = params.BATTERY_CAPACITY;
        this.drone.MAX_WEIGHT_TO_LOAD = params.MAX_WEIGHT_TO_LOAD;
        this.drone.MODEL = params.MODEL;
        this.drone.SERIAL_NUMBER = params.SERIAL_NUMBER;
        this.drone.STATE = params.STATE;
          });
          this.droneService.save(this.drone).subscribe(result => {
            this.drone.DRONE_ID = JSON.parse(result['droneId']);
        }, error => {this.condition = true; this.errorMesage = error.message;});
  }
}