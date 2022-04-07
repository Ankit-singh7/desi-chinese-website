import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  getBranchList():Observable<any> {
    return this.http.get(`${environment.apiURL}/branch`);
  }

  sendEmail(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/users/send`,data);
  }

  getFoodList(): Observable<any> {
    return this.http.get(`${environment.apiURL}/p_food`);
  }
  
}
