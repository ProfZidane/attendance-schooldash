import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { EntrepriseManageComponent } from './entreprise-manage/entreprise-manage.component';
import { EntrepriseMemberComponent } from './entreprise-member/entreprise-member.component';
import { GuardGuard } from './guards/guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoticeJustificationComponent } from './notice-justification/notice-justification.component';


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
      },
      {
        path: 'entreprise-manage',
        component: EntrepriseManageComponent,
        outlet: 'child'
      }, {
        path: 'entreprise-admin/:code',
        component: EntrepriseMemberComponent,
        outlet: 'child'
      }
    ]
  },
  {
    path: 'validation-justification/:id/:id2',
    component: NoticeJustificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
