import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list-component.component.html',
  styleUrls: ['./patient-list-component.component.css']
})
export class PatientListComponent implements OnInit {
  patients!: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patients = this.patientService.getPatients();
  }
}
