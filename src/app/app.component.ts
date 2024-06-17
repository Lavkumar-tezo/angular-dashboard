import { Component } from '@angular/core';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SearchbarComponent } from './layout/searchbar/searchbar.component';
import { PageTitleComponent } from './components/shared/page-title/page-title.component';
import {RouterOutlet,RouterModule } from '@angular/router';
import { DepartmentService } from './services/department/department.service';
import { ProjectService } from './services/project/project.service';
import { RoleService } from './services/role/role.service';
import { LocationService } from './services/location/location.service';
import { EmployeeService } from './services/employee/employee.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,SidebarComponent,SearchbarComponent],
  providers:[DepartmentService,ProjectService,RoleService,LocationService,EmployeeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeDashboard';
  employeePageDesc={
    title1:'Employee',
    titl2:'',
    desc:'Find all of your company\'s employee accounts and their associateroles',
    btn1:'Add Employee',
    btn2:'Export'
  }
}
