import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  countURL = environment.endPoint + 'user/get-personnal';
  listURL = environment.endPoint + 'user/get-data-personnal';
  createURL = environment.endPoint + 'auth/register';
  constructor(private http: HttpClient) { }

  countUser(): Observable<any> {
    return this.http.get(this.countURL);
  }


  getUserSystem(): Observable<any> {
    return this.http.get(this.listURL);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(this.createURL, data);
  }
}
