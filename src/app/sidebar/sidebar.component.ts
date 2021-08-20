import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
user: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user-data');
    this.user = JSON.parse(this.user);
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToEmployeeManagement() {
    this.router.navigateByUrl('/home/(child:employee-manage;open=true)');
  }


  goToAttendanceManagement() {
    this.router.navigateByUrl('/home/(child:attendance-manage;open=true)');
  }


  goToEntrepriseManagement() {
    this.router.navigateByUrl('/home/(child:entreprise-manage;open=true)');
  }



}
