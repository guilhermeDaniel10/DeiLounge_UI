import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './front-page/login/login.component';
import { RegistarUtilizadorComponent } from './front-page/registar-utilizador/registar-utilizador.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { UnidadesCurricularesComponent } from './unidades-curriculares/unidades-curriculares.component';

const routes: Routes = [
  { path: '', redirectTo: '/front-page', pathMatch: 'full' },
  {
    path: 'front-page', component: FrontPageComponent,
    children: [
      //{ path: 'registar-utilizador', component: RegistarUtilizadorComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registar-utilizador', component: RegistarUtilizadorComponent}



    ]
  },
  {
    path: 'pagina-inicial', component: PaginaInicialComponent,
    children: [
      { path: 'unidades-curriculares', component: UnidadesCurricularesComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
