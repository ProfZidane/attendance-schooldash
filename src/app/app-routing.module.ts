import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { GuardGuard } from './guards/guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        outlet: 'child'
      },
      {
        path: 'employee-manage',
        component: EmployeeManagementComponent,
        outlet: 'child'
      },
      {
        path: 'attendance-manage',
        component: AttendanceManagementComponent,
        outlet: 'child'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
