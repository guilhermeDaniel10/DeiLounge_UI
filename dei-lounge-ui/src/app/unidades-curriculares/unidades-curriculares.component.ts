import { Component, OnInit } from '@angular/core';
import { UnidadeCurricular } from '../model/unidade_curricular';
import { UnidadesCurricularesService } from '../services/unidades-curriculares.service';

@Component({
  selector: 'app-unidades-curriculares',
  templateUrl: './unidades-curriculares.component.html',
  styleUrls: ['./unidades-curriculares.component.scss']
})
export class UnidadesCurricularesComponent implements OnInit {

  unidadesCurriculares: UnidadeCurricular[];

  constructor(private unidadeCurricularService: UnidadesCurricularesService) { }

  ngOnInit(): void {
    this.getUnidadesCurriculares();
  }


  private getUnidadesCurriculares(): void {
    this.unidadeCurricularService.getAllNodeConnections().subscribe( data => {
      this.unidadesCurriculares = data;
    })

  }

}
