import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllocationComponent } from './allocation-component/allocation-component.component';
import { AppComponent } from './app.component';
import { DoctorDetailsComponent } from './doctor-details-component/doctor-details-component.component';
import { DoctorListComponent } from './doctor-list-component/doctor-list-component.component';
import { PatientDetailsComponent } from './patient-details-component/patient-details-component.component';
import { PatientListComponent } from './patient-list-component/patient-list-component.component';
import { DoctorService } from './services/doctor.service';
import { PatientService } from './services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    PatientListComponent,
    AllocationComponent,
    DoctorDetailsComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DoctorService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
