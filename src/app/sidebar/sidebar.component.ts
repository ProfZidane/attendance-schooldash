import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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




}
