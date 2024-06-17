import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedAlpha:string;
  selectedDepartments:string[]=[];
  selectedStatus:string[]=[];
  selectedLocations:string[]=[];

  private employeeList:Employee[]=[
    {
        "img": "./assets/images/profile.webp",
        "fName": "Lav",
        "lName": "Kumar",
        "email": "lavkumar@gmail.com",
        "location": "hyderabad",
        "department": "product eng",
        "role": "intern",
        "id": "TZ0001",
        "status": "Active",
        "joiningDate": "2024-01-17",
        "dob": "2001-09-17",
        "project": "Task-1",
        "manager": "",
        "mobile": 1212121212
    },
    {
        "img": "assets/images/profile.webp",
        "fName": "Aman",
        "lName": "Singh",
        "email": "rajesh.singh@tezo.com",
        "location": "hyderabad",
        "department": "qa",
        "role": "intern",
        "id": "TZ0002",
        "status": "Inactive",
        "joiningDate": "2019-03-12",
        "dob": "2004-01-17",
        "project": "Task-1",
        "manager": "",
        "mobile": 1212121212
    },
    {
        "img": "./assets/images/profile.webp",
        "fName": "Rajesh",
        "lName": "Singh",
        "email": "rajesh.singh@tezo.com",
        "location": "bangalore",
        "department": "ui/ux",
        "role": "intern",
        "id": "TZ0003",
        "status": "Active",
        "joiningDate": "2019-03-12",
        "dob": "2004-01-17",
        "project": "Task-3",
        "manager": "TZ0001",
        "mobile": 1212121212
    }];
  selectedEmployees:Employee[]=this.employeeList;
  constructor(private http:HttpClient) { }

  getEmployees():Employee[]{
    return this.selectedEmployees;
  }

  addEmployee(newEmployee:Employee){
    this.employeeList.push(newEmployee);
    this.selectedEmployees=this.employeeList;
  }

  updateEmployee(employee:Employee,id:string){
    let index:number=this.employeeList.findIndex(emp=>emp.id.toLowerCase()==id.toLowerCase());
    this.employeeList[index]=employee;
    this.selectedEmployees=this.employeeList;
  }

  changeEmployeeStatus(id:string){
    let index:number=this.employeeList.findIndex(emp=>emp.id.toLowerCase()==id.toLowerCase());
    this.employeeList[index].status=(this.employeeList[index].status.toLowerCase()=='active')?'Inactive':'Active';
    this.selectedEmployees=this.employeeList;
  }

  getSortedEmployees(){
    let sortedEmployee:Employee[]=this.employeeList;
    sortedEmployee=(this.selectedAlpha)?
    sortedEmployee.filter(emp=>emp.fName.toLowerCase().startsWith(this.selectedAlpha.toLowerCase())):sortedEmployee;
    sortedEmployee=(this.selectedDepartments.length!=0)?
    sortedEmployee.filter(emp=>this.selectedDepartments.includes(emp.department.toUpperCase())):sortedEmployee;
    sortedEmployee=(this.selectedLocations.length!=0)?
    sortedEmployee.filter(emp=>this.selectedLocations.includes(emp.location.toUpperCase())):sortedEmployee;
    sortedEmployee=(this.selectedStatus.length!=0)?
    sortedEmployee.filter(emp=>this.selectedStatus.includes(emp.status.toUpperCase())):sortedEmployee;
    this.selectedEmployees=sortedEmployee;
  }

  deleteEmployees(ids:string[] | string){
    this.employeeList=this.employeeList.filter(emp=> !ids.includes(emp.id));
    this.selectedEmployees=this.employeeList;
  }

  getEmployeeById(id:string):Employee{
    return this.employeeList.filter(emp=>emp.id.toLowerCase()==id.toLowerCase())[0];
  }

  getManagers(){
    return this.employeeList;
  }
}
