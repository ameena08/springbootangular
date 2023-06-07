import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details-component/doctor-details-component.component';
import { DoctorListComponent } from './doctor-list-component/doctor-list-component.component';
import { PatientDetailsComponent } from './patient-details-component/patient-details-component.component';
import { PatientListComponent } from './patient-list-component/patient-list-component.component';


const routes: Routes = [
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'doctors/:id', component: DoctorDetailsComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: '**', redirectTo: '/doctors', pathMatch: 'full' } // Redirect any other route to doctors
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
