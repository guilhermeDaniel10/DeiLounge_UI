import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private WebApiIt1url = "http://localhost:4000/users/";


  constructor(private httpClient: HttpClient) { }

  postAutenticarUtilizador(form: NgForm) {
    return this.httpClient.post(this.WebApiIt1url + "authenticate", form);
  }
}
