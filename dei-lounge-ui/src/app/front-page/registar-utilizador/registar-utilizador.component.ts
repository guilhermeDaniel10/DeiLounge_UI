import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-registar-utilizador',
  templateUrl: './registar-utilizador.component.html',
  styleUrls: ['./registar-utilizador.component.scss']
})
export class RegistarUtilizadorComponent implements OnInit {

  form: FormGroup;
  resultado: string;


  formModel = {
    username: '',
    email: '',
    password: '',
    confirmar: '',
  }
  constructor(private utilizadorServ: AutenticacaoService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('pagina-inicial');
    }
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: '',
      password: '',
      confirmar: '',
    })
  }

  onSubmit(form: NgForm) {
    this.utilizadorServ.postAutenticarUtilizador(form.value).subscribe(
      (res: User) => {

        localStorage.setItem('token', res.token);


        this.router.navigateByUrl('pagina-inicial');

      },
      (error) => {

        this.resultado = "Dados inválidos!"

        form.reset();
      });
  }


  registarUtilizador(form: NgForm) {
    if (form.value.confirmar != form.value.password) {
      this.resultado = "Erro";
      return;
    }
    this.utilizadorServ.postRegistarUtilizador(form.value).subscribe(

      (res: User) => {

        this.resultado = "Verifique o seu email";

      },
      (error) => {

        this.resultado = error.error.message;

        form.reset();
      });
  }

}
