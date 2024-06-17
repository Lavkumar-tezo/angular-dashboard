import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { SearchbarComponent } from '../../layout/searchbar/searchbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from '../employeecomponents/employee/employee.component';
import { RoleComponent } from '../rolecomponents/role/role/role.component';
import { RoledetailComponent } from '../rolecomponents/roledetails/roledetail/roledetail.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent,SearchbarComponent,RouterOutlet,RouterModule,EmployeeComponent,RoleComponent,RoledetailComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
