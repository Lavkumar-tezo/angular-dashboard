import { Component } from '@angular/core';
import { Employee } from '../../../../models/employee';
import { RoleService } from '../../../../services/role/role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeecardComponent } from '../employeecard/employeecard.component';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'roledetail',
  standalone: true,
  host:{
    'class':'w-100'
  },
  imports: [EmployeecardComponent,PageTitleComponent,NgFor],
  templateUrl: './roledetail.component.html',
  styleUrl: './roledetail.component.css'
})
export class RoledetailComponent {
  roleDetailsPageDesc={
    title1:'Role',
    title2:'Employee',
    desc:'Find all of your company\'s roles',
    btn1:'Add employee',
    route:'/employees/employeeform'
  };
  employeeList:Employee[]=[];
  roleId:string='';
  params;
  constructor(private route: ActivatedRoute,
    private router: Router,private roles:RoleService){
      this.params=this.route.paramMap.subscribe(params => {
        if (params.get('id')) {
          this.roleId = params.get('id');
          this.employeeList=roles.getEmployeesById(this.roleId);
        }
      });
  }
  
  ngOnDestroy(){
    this.params.unsubscribe();
    this.roleId='';
  }

}
