import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnidadesCurricularesService {

  private WebApiIt1url = "http://localhost:4000/unidadescurriculares/";

  constructor() { }
}
