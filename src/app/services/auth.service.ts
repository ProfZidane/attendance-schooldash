import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

loginURL = environment.endPoint + 'auth/login';
logoutURL = environment.endPoint + 'auth/logout';
constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(this.loginURL, data);
  }


  logout(data: any): Observable<any> {
    return this.http.post(this.logoutURL, data);
  }
 

}
