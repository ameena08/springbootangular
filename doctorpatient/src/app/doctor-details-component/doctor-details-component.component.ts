import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../models/doctor.model';


@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details-component.component.html',
  styleUrls: ['./doctor-details-component.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input()
  doctor!: Doctor;

  constructor() { }

  ngOnInit() {
  }
}
