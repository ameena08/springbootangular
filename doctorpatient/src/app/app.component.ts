import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to the Hospital Application</h1>
    <app-doctor-list></app-doctor-list>
    <app-patient-list></app-patient-list>
    <app-allocation></app-allocation>
    <app-doctor-details></app-doctor-details>
    <app-patient-details></app-patient-details>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
