import { Injectable, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Role } from '../../models/role';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements OnInit {
  selectedDepartments:string[]=[];
  selectedLocations:string[]=[];
  private roleNames:string[]=['intern','sales'];
  private roles:Role[]=[
    {
        "id":"IN001",
        "name": "intern",
        "description":"",
        "departments":["product eng","qa"],
        "locations":["hyderabad","bangalore"],
        "profiles": ["assets/images/profile.webp","assets/images/profile.webp","assets/images/profile.webp","assets/images/profile.webp","assets/images/profile.webp","assets/images/profile.webp"]
    },
    {
        "id":"IN002",
        "name": "sales",
        "departments":["qa"],
        "description":"",
        "locations":["hyderabad"],
        "profiles": ["assets/images/profile.webp"]
    }
  ];
  private sortedRoles:Role[]=this.roles;
  constructor(private employees:EmployeeService,private http:HttpClient) {
  }

  ngOnInit(): void {
    
  }

  getAllRoleNames(){
    return this.roleNames;
  }

  getRoles(){
    return this.sortedRoles;
  }

  getSortedRoles(){
    let sortedRoles:Role[]=this.roles;
    sortedRoles=(this.selectedDepartments.length!=0)?
    sortedRoles.filter(role=>this.selectedDepartments.some(input => role.departments.includes(input.toLowerCase()))):sortedRoles;
    sortedRoles=(this.selectedLocations.length!=0)?
    sortedRoles.filter(role=>this.selectedLocations.some(input => role.locations.includes(input.toLowerCase()))):sortedRoles;
    this.sortedRoles=sortedRoles;
  }

  getEmployeesById(id:string):Employee[]{
    return this.employees.selectedEmployees;
  }
}
