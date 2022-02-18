import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  resultado: string;
  resultado1: string;
  
  formModel={
    username : '',
    password: '',
  }
  constructor(private utilizadorServ: AutenticacaoService,
    private formBuilder : FormBuilder,private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.router.navigateByUrl('pagina-inicial');
    }
    this.form = this.formBuilder.group({
      username : ['',Validators.required],
      password: '',
    })
  }

  onSubmit(form:NgForm){
    console.log(form.value);

    
    this.utilizadorServ.postAutenticarUtilizador(form.value).subscribe(
      (res: User) => {

        localStorage.setItem('token', res.token);
        
        
        this.router.navigateByUrl('pagina-inicial');

      },
      (error) => {
        
          this.resultado = "Dados inválidos!"
        
         form.reset();
         //this.router.navigateByUrl('main-menu');
         // get the status as error.status
      });
      
      /*(res: any) => {
        
        //localStorage.setItem('token', res.token);
        //this.router.navigateByUrl('home-user');
      },
      err => {
        if (err.status == 400){
          console.log(err);
          this.router.navigateByUrl('home-user');
        }
        else{
          console.log(err);
        }
          
      }*/

    
    
  }

}

