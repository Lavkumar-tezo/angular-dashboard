import { Component, DoCheck, ElementRef, HostListener } from '@angular/core';
import { EmployeeService } from '../../../services/employee/employee.service';
import { Employee } from '../../../models/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import * as XLSX from "xlsx";

@Component({
  selector: 'employeetable',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterModule],
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements DoCheck {
  employeeList: Employee[] = [];
  selctedRowCount: number = 0;
  selectedIds: Set<string> = new Set<string>();
  isRowDelete: boolean = false;
  deleteRowId: string | null = null;
  isHeaderChecked:boolean=false;
  employeeIdWithOptions: string | null = null;
  currentSortedColumn:string='';
  isAscending:boolean=false;

  constructor(private employees: EmployeeService, private el: ElementRef) {}

  ngDoCheck() {
    this.employeeList = this.employees.getEmployees();
    //this.selctedRowCount = this.selectedIds.size;
  }

  onSelectRow(id:string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.selectedIds.add(id);
    } else {
      this.selectedIds.delete(id);
    }
    this.selctedRowCount = this.selectedIds.size;
    this.isHeaderChecked=(this.selctedRowCount === this.employeeList.length);
  }

  onAllRowSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.selctedRowCount = this.employeeList.length;
      this.selectedIds = new Set(this.employeeList.map(emp => emp.id));
    } else {
      this.selctedRowCount = 0;
      this.selectedIds.clear();
    }
  }

  toggleStatus(id:string){
    this.employees.changeEmployeeStatus(id);
  }

  showDeleteDialogBox(id: string | null = null) {
    this.isRowDelete = true;
    this.deleteRowId = id;
  }

  hideDeleteDialogBox() {
    this.isRowDelete = false;
    this.deleteRowId = null;
  }

  get selectedRowCountText() {
    return this.deleteRowId ? 'this row' : `${this.selctedRowCount} row(s)`;
  }

  deleteEmployee() {
    if (this.deleteRowId) {
        console.log(this.deleteRowId);
        console.log(this.employeeList);
        this.employeeList=this.employeeList.filter(emp=>emp.id!=this.deleteRowId);
        this.employees.deleteEmployees(this.deleteRowId);
        this.selectedIds.delete(this.deleteRowId);
    } else {
      console.log(this.selectedIds);
      this.employees.deleteEmployees(Array.from(this.selectedIds));
      this.selectedIds.clear();
    }
    this.isRowDelete = false;
    this.deleteRowId = null;
    this.selctedRowCount = 0;
  }

  toggleEditOption(event: Event, employeeId: string) {
    event.stopPropagation();
    this.employeeIdWithOptions = this.employeeIdWithOptions === employeeId ? null : employeeId;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.employeeIdWithOptions = null;
  }

  sortTable(columnName:string){
    if(this.currentSortedColumn==null){
      this.isAscending=true;
    }
    else if(this.currentSortedColumn==columnName){
      this.isAscending=false;
    }
    else{
      this.isAscending=true;
    }
    this.currentSortedColumn=columnName;
    if(this.isAscending){
      this.employeeList=this.employeeList.sort((a,b)=> ((a as Employee)[columnName] > (b as Employee)[columnName] ? 1:-1))
    }
    else{
      this.employeeList=this.employeeList.sort((a,b)=> ((a as Employee)[columnName] < (b as Employee)[columnName] ? 1:-1))
    }
  }
}

