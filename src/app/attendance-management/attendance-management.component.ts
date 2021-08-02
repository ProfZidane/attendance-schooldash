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
  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.getListAttendance();
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
