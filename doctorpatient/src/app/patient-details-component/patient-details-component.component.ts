import { Component, Input } from '@angular/core';
import { Patient } from '../models/patient.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details-component.component.html',
  styleUrls: ['./patient-details-component.component.css']
})
export class PatientDetailsComponent {
  @Input() patient!: Patient;
  assignedDoctor: string='';

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.assignedDoctor = this.getAssignedDoctorName();
    this.doctorService.selectedDoctor.subscribe(() => {
      this.assignedDoctor = this.getAssignedDoctorName();
    });
  }

  getAssignedDoctorName(): string {
    const assignedDoctorId = this.patient?.assignedDoctorId;
    const doctor = this.doctorService.getDoctorById(assignedDoctorId);
    return doctor ? doctor.name : 'Not Assigned';
  }
}
