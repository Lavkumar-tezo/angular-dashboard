import { Component, Input } from '@angular/core';
import { Employee } from '../../../../models/employee';

@Component({
  selector: 'employeecard',
  standalone: true,
  imports: [],
  templateUrl: './employeecard.component.html',
  styleUrl: './employeecard.component.css'
})
export class EmployeecardComponent {
  @Input('employee') employee:Employee;
}
