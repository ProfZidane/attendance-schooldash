import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProofService {
  getDetailURL = environment.endPoint + 'proof/get-detail-proof/';
  validationURL = environment.endPoint + 'proof/set-validation';
  constructor(private http: HttpClient) { }

  getDetailProof(id: any): Observable<any> {
    return this.http.get(this.getDetailURL + id);
  }

  setValidationProof(data: any): Observable<any> {
    return this.http.post(this.validationURL, data);
  }
}
