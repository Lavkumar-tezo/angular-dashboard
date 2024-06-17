import { Component } from '@angular/core';
import { AlphabetFilterComponent } from '../alphabet-filter/alphabet-filter.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { EmployeefilterComponent } from '../employeefilter/employeefilter.component';
import { EmployeetableComponent } from '../employeetable/employeetable.component';

@Component({
  selector: 'app-employeemain',
  standalone: true,
  host:{
    'class':'w-100'
  },
  imports: [AlphabetFilterComponent,PageTitleComponent,EmployeefilterComponent,EmployeetableComponent],
  templateUrl: './employeemain.component.html',
  styleUrl: './employeemain.component.css'
})
export class EmployeemainComponent {
  employeePageDesc={
    title1:'Employee',
    titl2:'',
    desc:'Find all of your company\'s employee accounts and their associateroles',
    btn1:'Add Employee',
    btn2:'Export',
    route:'employeeform'
  }
  constructor(){
    
  }
}
