import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { User } from '../model/user';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {

  utilizadorAtual : User;
  username: string = "";

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router, private authService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (res: User) => {
        this.utilizadorAtual = res;
        this.username = this.utilizadorAtual.username;
        console.log(this.utilizadorAtual);

      },
      (error) => {

      });

    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });


  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('utilizadorAtual')
    this.router.navigate(['/front-page']);
  }
}
