import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DRONE } from '../app/drone';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DroneService {

  private usersAddUrl: string;

  constructor(private http: HttpClient) {
    this.usersAddUrl = 'http://localhost:8085/drone/register';
  }

  public save(drone: DRONE) {
    return this.http.post(this.usersAddUrl,
      {
        "serial_number": drone.SERIAL_NUMBER,
        "weight": drone.MAX_WEIGHT_TO_LOAD,
        "battery_capacity": drone.BATTERY_CAPACITY,
        "model": drone.MODEL,
        "state": drone.STATE
      });
  }
  public findToCheckCapacity(DRONE_ID: number): Observable<JSON>{
    this.usersAddUrl = 'http://localhost:8085/drone/'+ DRONE_ID +'/battery';
    return this.http.get<JSON>(this.usersAddUrl);
  }

  public getFreeDrones(): Observable<JSON[]>{
    this.usersAddUrl = 'http://localhost:8085/drone/free';
    return this.http.get<JSON[]>(this.usersAddUrl);
  }
}
