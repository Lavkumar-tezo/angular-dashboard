import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import * as XLSX from "xlsx";
import { EmployeeService } from '../../../services/employee/employee.service';
import { Employee } from '../../../models/employee';
@Component({
  selector: 'pagetitle',
  standalone: true,
  host:{
    'class':'employees-container d-flex jus-content-btw w-100'
  },
  imports: [NgIf,RouterLink,RouterModule],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent {
  @Input() titleDesc;
  pageTitle:string;
  constructor(private employee:EmployeeService){
  }
  exportArrayToExcel() {
    let sheetName="EmployeeData";
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(this.employee.getEmployees());
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${sheetName}.xlsx`);
  }
}
