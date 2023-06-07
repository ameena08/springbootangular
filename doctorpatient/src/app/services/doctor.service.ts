import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors: Doctor[] = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology', contactDetails: 'john@example.com' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrics', contactDetails: 'jane@example.com' },
    { id: 3, name: 'Dr. David Johnson', specialization: 'Orthopedics', contactDetails: 'david@example.com' }
  ];

  selectedDoctor: BehaviorSubject<Doctor | null> = new BehaviorSubject<Doctor | null>(null);

  constructor() { }

  getDoctors(): Doctor[] {
    return this.doctors;
  }

  selectDoctor(doctorId: number): void {
    const doctor = this.getDoctorById(doctorId);
    if (doctor) {
      this.selectedDoctor.next(doctor);
    }
  }

  getDoctorById(doctorId: number): Doctor | undefined {
    return this.doctors.find(doctor => doctor.id === doctorId);
  }
}
