import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DRONE } from '../drone';
import { DroneService } from '../drone-service.service';
@Component({
  selector: 'app-check-capacity-form',
  templateUrl: './check-capacity-form.component.html',
  styleUrl: './check-capacity-form.component.css'
})
export class CheckCapacityFormComponent {
  drones: DRONE[]=[];
  selectedDrones: number[]=[];
  DRONE_ID: number;
  freeDrones: any;
  i: number;
  constructor( private route: ActivatedRoute, 
    private router: Router, private droneService: DroneService) {
  }
  ngOnInit() {
    this.droneService.getFreeDrones().subscribe(data=> {
      for (this.i = 0; this.i < 2; this.i++ ) 
      {
        this.drones.push(new DRONE());
        this.drones[this.i].DRONE_ID = JSON.parse(data.at(this.i)['droneId']);
      }
    });
  }

  onSubmit(selectedDrones) {
    this.router.navigate(['/successCheck'],{queryParams: {selectedDrones}});
  } 
}
