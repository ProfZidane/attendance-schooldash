import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.css']
})
export class AttendanceManagementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  attendances:any;
  state = {
    load: false
  };
  userRole: any;
  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.getListAttendance();
    this.getRole();
  }

  getRole() {
    if (localStorage.getItem('user-data') !== null) {
      this.userRole = localStorage.getItem('user-data');
      this.userRole = JSON.parse(this.userRole);
    }
  }


  getListAttendance() {
    this.attendanceService.getListAtendances().subscribe(
      (data) => {
        console.log(data);
        this.attendances = data;
      }, (err) => {
        console.log(err);
        
      }
    );
  }

}
