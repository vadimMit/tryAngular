import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { CheckCapacityFormComponent } from './check-capacity-form/check-capacity-form.component';
import { CheckCapacitySuccessComponent } from './check-capacity-success/check-capacity-success.component';
import { DroneFormResultComponent } from './drone-form-result/drone-form-result.component';

const routes: Routes = [
  { path: 'register', component: DroneFormComponent },
  { path: 'checkCapacity', component: CheckCapacityFormComponent },
  { path: 'successCheck', component: CheckCapacitySuccessComponent },
  { path: 'registerResult', component: DroneFormResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }