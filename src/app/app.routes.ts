import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employeecomponents/employee/employee.component';
import { EmployeeFormComponent } from './components/shared/employeeform/employeeform.component';
import { RoleComponent } from './components/rolecomponents/role/role/role.component';
import { RoledetailComponent } from './components/rolecomponents/roledetails/roledetail/roledetail.component';
import { RoleformComponent } from './components/rolecomponents/role/roleform/roleform.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { MainComponent } from './components/main/main.component';
import { EmployeemainComponent } from './components/employeecomponents/employeemain/employeemain.component';
import { RolemainComponent } from './components/rolecomponents/role/rolemain/rolemain.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'main',
        canActivate: [authGuard],
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'employees',
                pathMatch: 'full'
            },
            {
                path: 'employees',
                component: EmployeeComponent,
                children: [
                    {
                        path: "",
                        component: EmployeemainComponent
                    },
                    {
                        path: "employeeform",
                        component: EmployeeFormComponent
                    },
                    {
                        path: "employeeform/:id",
                        component: EmployeeFormComponent
                    }
                ]
            },
            {
                path: 'roles',
                component: RoleComponent,
                children: [
                    {
                        path: "",
                        component: RolemainComponent
                    },
                    {
                        path: "roleform",
                        component: RoleformComponent
                    },
                    {
                        path: "roleform/:id",
                        component: RoleformComponent
                    },
                    {
                        path: ":id",
                        component: RoledetailComponent
                    }
                ]
            }
        ]
    },
    {
        path: "**",
        redirectTo:'/login',
        pathMatch:'full'
    }
];

