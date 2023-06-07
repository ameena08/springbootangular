import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation-component.component.html',
  styleUrls: ['./allocation-component.component.css']
})
export class AllocationComponent implements OnInit {
  selectedDoctor: Doctor | null = null;
  patients: Patient[] = [];

  constructor(private doctorService: DoctorService, private patientService: PatientService) { }

  ngOnInit() {
    this.doctorService.selectedDoctor.subscribe((doctor: Doctor) => {
      this.selectedDoctor = doctor;
      this.patients = this.patientService.getPatientsByDoctor(doctor.id);
    });
  }

  allocateDoctor(patient: Patient) {
    this.patientService.updatePatientAssignedDoctor(patient.id, this.selectedDoctor!.id);
  }
}
