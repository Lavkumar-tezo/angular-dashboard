import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive,Router, RouterModule, RouterOutlet } from '@angular/router';
import {  } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,NgIf,RouterModule, RouterLinkActive, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  username: string='';
  password: string='';
  loginForm: FormGroup;
  constructor(private form: FormBuilder,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.authService.login(username, password)) {
        this.router.navigate(['/main']);
      } else {
        alert('Invalid username or password');
      }
    }
  }

}

