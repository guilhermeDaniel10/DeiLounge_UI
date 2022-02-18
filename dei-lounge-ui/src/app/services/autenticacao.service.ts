import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private WebApiIt1url = "http://localhost:4000/users/";


  constructor(private httpClient: HttpClient) { }

  postAutenticarUtilizador(form: NgForm): Observable<User> {
    return this.httpClient.post<User>(this.WebApiIt1url + "authenticate", form);
  }

  getCurrentUser(): Observable<User> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.httpClient.get<User>(this.WebApiIt1url + "current", { headers: tokenHeader });
  }

  postRegistarUtilizador(form: NgForm): Observable<any> {
    return this.httpClient.post(this.WebApiIt1url + "register", form);
  }

}
