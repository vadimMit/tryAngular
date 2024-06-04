import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DRONE } from '../drone';
import { DroneService } from '../drone-service.service';

@Component({
  selector: 'app-check-capacity-success',
  templateUrl: './check-capacity-success.component.html',
  styleUrl: './check-capacity-success.component.css'
})
export class CheckCapacitySuccessComponent  {
  capacityArray: string[]=[];
  drone: DRONE;
  condition = false;
  errorMesage: string;
  notFound = false;
  selectedDrones: DRONE[]=[];
  i: number;

  constructor(private route: ActivatedRoute, private droneService: DroneService) {
    
    this.route.queryParams
    .subscribe(params => {
      for (this.i = 0; this.i < params.selectedDrones.length; this.i++ ) 
      {
        this.selectedDrones.push(new DRONE());
        this.selectedDrones[this.i].DRONE_ID = params.selectedDrones[this.i];
        this.droneService.findToCheckCapacity(params.selectedDrones[this.i]).subscribe(data => {
          this.capacityArray.push(JSON.stringify(data['battery_capacity']));
        }, error => {if (error.status === 404) this.notFound = true; else { this.condition = true;this.errorMesage = error.message;}}
        );
        
        
      };
    }
    );
  }
  
}
