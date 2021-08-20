import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  getURL = environment.endPoint + 'entreprise/get-entreprise';
  postURL = environment.endPoint + 'entreprise/create-entreprise';
  getByCodeURL = environment.endPoint + 'entreprise/get-admin-entreprise/';
  constructor(private http: HttpClient) { }

  getEntreprise(): Observable<any> {
    return this.http.get(this.getURL);
  }


  getEntrepriseByCode(code: any): Observable<any> {
    return this.http.get(this.getByCodeURL + code);
  }

  postEntreprise(data: any): Observable<any> {
    return this.http.post(this.postURL, data);
  }
}
