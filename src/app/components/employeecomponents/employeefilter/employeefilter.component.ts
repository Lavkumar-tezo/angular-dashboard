import { Component, OnInit,ViewChild, ViewChildren, QueryList, Input, OnDestroy } from '@angular/core';
import { DepartmentService } from '../../../services/department/department.service';
import { LocationService } from '../../../services/location/location.service';
import { SelectFilterComponent } from '../../shared/select-filter/select-filter.component';
import { EmployeeService } from '../../../services/employee/employee.service';

@Component({
  selector: 'employeefilter',
  standalone: true,
  host:{
    'class':'w-100 d-flex jus-content-btw b-5 reset-filter'
  },
  imports: [SelectFilterComponent],
  templateUrl: './employeefilter.component.html',
  styleUrl: './employeefilter.component.css'
})
export class EmployeefilterComponent implements OnInit,OnDestroy {
  isStatusDefault:boolean=true;
  isDeptDefault:boolean=true;
  isLocationDefault:boolean=true;
  departmentList:string[]=[];
  locationList:string[]=[];
  statusList:string[]=['Active','Inactive'];
  constructor(private departments:DepartmentService,
    private locations:LocationService,private employeeService:EmployeeService){
  }
  ngOnInit(){
    this.departmentList=this.departments.getDepartments();
    this.locationList=this.locations.getLocations();
  }

  ngOnDestroy(): void {
    this.employeeService.selectedAlpha='';
    this.employeeService.selectedDepartments.length=0;
    this.employeeService.selectedLocations.length=0;
    this.employeeService.selectedStatus.length=0;
  }
  resetFilters() {
    this.isDeptDefault=true;
    this.isStatusDefault=true;
    this.isLocationDefault=true;
    this.employeeService.selectedAlpha='';
    this.employeeService.selectedDepartments.length=0;
    this.employeeService.selectedLocations.length=0;
    this.employeeService.selectedStatus.length=0;
    this.employeeService.getSortedEmployees();
  }
  onStatusFilterChange(values:string[]){
    this.employeeService.selectedStatus=values;
  }
  onDeptFilterChange(values:string[]){
    this.employeeService.selectedDepartments=values;
  }
  onLocationFilterChange(values:string[]){
    this.employeeService.selectedLocations=values;
  }
  onFilterChange(name:string){
    if(name=="status"){
      this.isStatusDefault=false;
    }
    else if (name=="Department"){
      this.isDeptDefault=false;
    }
    else{
      this.isLocationDefault=false;
    }
  }
  
  applyFilters() {
    this.employeeService.getSortedEmployees();
  }
}
