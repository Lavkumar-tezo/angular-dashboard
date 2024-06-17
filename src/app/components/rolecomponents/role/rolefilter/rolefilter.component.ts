import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../../../../services/department/department.service';
import { LocationService } from '../../../../services/location/location.service';
import { RoleService } from '../../../../services/role/role.service';
import { SelectFilterComponent } from '../../../shared/select-filter/select-filter.component';
@Component({
  selector: 'rolefilter',
  standalone: true,
  host:{
    'class':'w-100 d-flex jus-content-btw b-5 reset-filter'
  },
  imports: [SelectFilterComponent],
  templateUrl: './rolefilter.component.html',
  styleUrl: './rolefilter.component.css'
})
export class RolefilterComponent implements OnInit,OnDestroy {
  isDeptDefault:boolean=true;
  isLocationDefault:boolean=true;
  departmentList:string[]=[];
  locationList:string[]=[];

  constructor(private departments:DepartmentService,
    private locations:LocationService,private roles:RoleService){
  }

  ngOnInit(){
    this.departmentList=this.departments.getDepartments();
    this.locationList=this.locations.getLocations();
  }

  ngOnDestroy(): void {
    this.roles.selectedDepartments.length=0;
    this.roles.selectedLocations.length=0;
  }

  resetFilters() {
    this.isDeptDefault=true;
    this.isLocationDefault=true;
    this.roles.selectedDepartments.length=0;
    this.roles.selectedLocations.length=0;
    this.roles.getSortedRoles();
  }

  onDeptFilterChange(values:string[]){
    this.roles.selectedDepartments=values;
  }

  onLocationFilterChange(values:string[]){
    this.roles.selectedLocations=values;
  }

  onFilterChange(name:string){
    if (name=="Department"){
      this.isDeptDefault=false;
    }
    else{
      this.isLocationDefault=false;
    }
  }

  applyFilters() {
    console.log(this.roles.selectedDepartments);
    console.log(this.roles.selectedLocations);
    this.roles.getSortedRoles();
  }

}
