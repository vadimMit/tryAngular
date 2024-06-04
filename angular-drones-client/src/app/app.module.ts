import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DxDataGridModule } from "devextreme-angular";
import { AppComponent } from './app.component';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { DroneService } from './drone-service.service';
import { CheckCapacityFormComponent } from './check-capacity-form/check-capacity-form.component';
import { CheckCapacitySuccessComponent } from './check-capacity-success/check-capacity-success.component';
import { DroneFormResultComponent } from './drone-form-result/drone-form-result.component';
import { PaginatorModule } from 'primeng/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DroneFormComponent,
    CheckCapacityFormComponent,
    CheckCapacitySuccessComponent,
    DroneFormResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DxDataGridModule, 
    PaginatorModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DroneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
