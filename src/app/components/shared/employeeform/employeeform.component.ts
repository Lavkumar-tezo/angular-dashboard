import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule,AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employee/employee.service';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../../services/department/department.service';
import { ProjectService } from '../../../services/project/project.service';
import { LocationService } from '../../../services/location/location.service';
import { RoleService } from '../../../services/role/role.service';
import { CommonModule, Location, NgFor, NgIf } from '@angular/common';
import { HighligtErrorDirective } from '../../../directives/highligt-error.directive';

@Component({
  selector: 'employeeform',
  standalone: true,
  host:{
    'class':'employee-form-container w-100'
  },
  imports: [ReactiveFormsModule,NgFor,FormsModule,NgIf,HighligtErrorDirective,CommonModule],
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css'
})

export class EmployeeFormComponent implements OnInit,OnDestroy {
  formTitle:string;
  employeeForm: FormGroup;
  isEditMode: boolean = false;
  employeeId: string = '';
  departments: string[] = [];
  locations: string[] = [];
  projects: string[] = [];
  roles: string[] = [];
  managers:Employee[]=[];
  params:Subscription;
  imagePreview: string |ArrayBuffer = 'assets/images/dummy-profile-image.jpg';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employee:EmployeeService,
    private department:DepartmentService,
    private project:ProjectService,
    private location:LocationService,
    private role:RoleService,
    private locationroute:Location
  ) {
    this.employeeForm = new FormGroup({
      fName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      lName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      joiningDate: new FormControl(new Date().toISOString().substring(0, 10), [Validators.required]),
      department: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      id: new FormControl('', [Validators.required,Validators.pattern(/^TZ\d{4}$/)]), // Assuming this is the unique identifier for employee
      dob: new FormControl(''),
      project: new FormControl(''),
      manager: new FormControl(''),
      status: new FormControl('Active'),
      mobile: new FormControl('', [Validators.pattern(/^\d{10}$/),Validators.maxLength(10),Validators.minLength(10)])
    });
  }
  transformToUpperCase(controlName: string): void {
    const control = this.employeeForm.get(controlName);
    if (control) {
      control.setValue(control.value.toUpperCase());
    }
  }
  ngOnInit() {
    this.departments=this.department.getDepartments();
    this.locations=this.location.getLocations();
    this.roles=this.role.getAllRoleNames();
    this.projects=this.project.getProjects();
    this.managers=this.employee.getManagers();
    this.checkEditMode();
  }

  ngOnDestroy(){
    this.params.unsubscribe();
    this.employeeId='';
  }
  

  checkEditMode(): void {
    this.params=this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.formTitle="Edit Employee"
        this.employeeId = params.get('id');
        this.isEditMode = true;
        let selectedEmployee:Employee=this.employee.getEmployeeById(this.employeeId);
        this.populateForm(selectedEmployee);
      }
      else{
        this.formTitle="Add Employee"
      }
    });
  }

  populateForm(employee:Employee): void {
    this.employeeForm.patchValue({
      fName: employee.fName,
      lName: employee.lName,
      email: employee.email,
      joiningDate: employee.joiningDate,
      department: employee.department,
      location: employee.location,
      role: employee.role,
      id: employee.id,
      dob: employee.dob,
      project: employee.project,
      manager: employee.manager,
      status: employee.status,
      mobile: employee.mobile
    });
    this.imagePreview=employee.img;
  }

  
  onSubmit(): void {
    const formData = this.employeeForm.value as Employee;
    formData.img=this.imagePreview.toString();
      if (this.isEditMode) {       
        this.employee.updateEmployee(formData,this.employeeId)
      } else {    
        this.employee.addEmployee(formData);
      }
      this.locationroute.back();
  }

  onReset(){
    this.locationroute.back();
  }

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Set the image preview
        this.employeeForm.patchValue({ img: reader.result }); // Update the form control with the image data
      };
      reader.readAsDataURL(file);
    }
  }

}

