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
    
    // this.getDataToBar();
    this.getLateByUser();
    this.getLateByMonth();

    // this.getDataToChart();
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


  getLateByUser() {
     this.attendanceService.countLateByUser().subscribe(
       (data) => {
        console.log(data);
        let employee: string[] = [];
        let count: string[] = [];
        data.forEach((element: any) => {
          employee.push(element.data_user.firstName + ' ' + element.data_user.lastName);
          count.push(element.data_attendance.length);
        });
        console.log(employee);
        console.log(count);

        this.getDataToBar(employee, count);
        
       }, (err) => {
         console.log(err);

       }
     );
  }


  getLateByMonth() {
    this.attendanceService.countLateByMonth().subscribe(
      (data) => {
        console.log(data);
        const keys = Object.keys(data);
        console.log(keys);
        const value = Object.values(data);
        console.log(value);
        
        this.getDataToChart(keys, value);

      }, (err) => {
        console.log(err);
        
      }
    );
  }


  getDataToChart(monthTab: any, dataTab: any) {
    this.type = 'line';
    this.data = {
      labels: monthTab,
      datasets: [
        {
          label: "Nombre de retards",
          data: dataTab
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

  getDataToBar(employeeTab: any, dataTab: any) {
    this.type2 = 'bar';
    this.data2 = {
      labels: employeeTab,
      datasets: [
        {
          label: "Nombre de retards",
          data: dataTab
        }
      ]
    };
    this.options2 = {
      responsive: true,
      maintainAspectRatio: false
    };
  }


}
