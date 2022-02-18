import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnidadesCurricularesComponent } from './unidades-curriculares/unidades-curriculares.component';
import { HttpClientModule } from '@angular/common/http';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './front-page/login/login.component';
import { RegistarUtilizadorComponent } from './front-page/registar-utilizador/registar-utilizador.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UnidadesCurricularesComponent,
    FrontPageComponent,
    LoginComponent,
    RegistarUtilizadorComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgbModule,
    HttpClientModule,
    BrowserModule /* or CommonModule */,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
