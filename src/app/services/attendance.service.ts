import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  countAttendanceURL = environment.endPoint + 'admin-statistic/get-all-attendance';
  countProofURL = environment.endPoint + 'admin-statistic/get-all-proof';
  lateByUserURL = environment.endPoint + 'admin-statistic/get-attendance-by-user';
  lateByMonthURL = environment.endPoint + 'admin-statistic/get-attendance-by-month';
  getListAttendance = environment.endPoint + 'attendance/get-list-attendances';

  constructor(private http: HttpClient) { }

  countAttendance(): Observable<any> {
    return this.http.get(this.countAttendanceURL);
  }

  countProof(): Observable<any> {
    return this.http.get(this.countProofURL);
  }
 
  countLateByUser(): Observable<any> {
    return this.http.get(this.lateByUserURL);
  }

  countLateByMonth(): Observable<any> {
    return this.http.get(this.lateByMonthURL);
  }

  getListAtendances(): Observable<any> {
    return this.http.get(this.getListAttendance);
  }

}
