import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countUser: any;
  countAttendance: any;
  countProof: any;
  type: any;
  data: any;
  options: any;
  type2: any;
  data2: any;
  options2: any;
  year = new Date().getFullYear();
  constructor(private userService: UserService, private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.getCountUser();
    this.getCountAttendance();
    this.getCountProof();
    this.getDataToChart();
    this.getDataToBar();
  }

  getCountUser() {
    this.userService.countUser().subscribe(
      (data) => {
        console.log(data);
        this.countUser = data;
      }, (err) => {
        console.log(err);
        
      }
    );
  }


  getCountAttendance() {
    this.attendanceService.countAttendance().subscribe(
      (data) => {
        console.log(data);
        this.countAttendance = data;
      }, (err) => {
        console.log(err);
        
      }
    );
  }

  getCountProof() {
    this.attendanceService.countProof().subscribe(
      (data) => {
        console.log(data);
        this.countProof = data;
      }, (err) => {
        console.log(err);
        
      }
    );
  }

  getDataToChart() {
    this.type = 'line';
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

  getDataToBar() {
    this.type2 = 'bar';
    this.data2 = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    this.options2 = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

}
