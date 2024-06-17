import { Component } from '@angular/core';
import { AlphabetFilterComponent } from '../alphabet-filter/alphabet-filter.component';
import { EmployeefilterComponent } from '../employeefilter/employeefilter.component';
import { DepartmentService } from '../../../services/department/department.service';
import { LocationService } from '../../../services/location/location.service';
import { ProjectService } from '../../../services/project/project.service';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { EmployeetableComponent } from '../employeetable/employeetable.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../layout/sidebar/sidebar.component';
import { SearchbarComponent } from '../../../layout/searchbar/searchbar.component';

@Component({
  selector: 'employee',
  standalone: true,
  host:{
    'class':'w-100'
  },
  imports: [AlphabetFilterComponent,SidebarComponent,SearchbarComponent,RouterOutlet,EmployeefilterComponent,PageTitleComponent,EmployeetableComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(){

  }
  
}
