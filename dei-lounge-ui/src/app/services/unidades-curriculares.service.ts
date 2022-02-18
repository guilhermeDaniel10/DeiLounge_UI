import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { UnidadeCurricular } from '../model/unidade_curricular';

@Injectable({
  providedIn: 'root'
})
export class UnidadesCurricularesService {

  private WebApiIt1url = "http://localhost:4000/unidadescurriculares/";

  constructor(private httpClient: HttpClient) { }


  getAllNodeConnections(): Observable<UnidadeCurricular[]> {
    return this.httpClient.get(this.WebApiIt1url).pipe(
      map(this.extractData));
  }

 
  

  private extractData(res: any) {
    return res || {};
  }
}
