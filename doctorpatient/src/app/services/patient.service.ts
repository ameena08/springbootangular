import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients: Patient[] = [
    { id: 1, name: 'John Doe', age: 30, contactDetails: 'john@example.com', assignedDoctorId: 1 },
    { id: 2, name: 'Jane Smith', age: 25, contactDetails: 'jane@example.com', assignedDoctorId: 2 },
    { id: 3, name: 'David Johnson', age: 40, contactDetails: 'david@example.com', assignedDoctorId: 3 }
  ];

  getPatients(): Patient[] {
    return this.patients;
  }

  getPatientById(patientId: number): Patient | undefined {
    return this.patients.find(patient => patient.id === patientId);
  }
  

  getPatientsByDoctor(doctorId: number): Patient[] {
    return this.patients.filter(patient => patient.assignedDoctorId === doctorId);
  }

  updatePatientAssignedDoctor(patientId: number, doctorId: number): void {
    const patient = this.getPatientById(patientId);
    if (patient) {
      patient.assignedDoctorId = doctorId;
    }
  }
}
