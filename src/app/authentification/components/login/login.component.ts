import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/authentification-service';
import { HttpClient,  HttpHeaders, HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{ 
  loginForm!: FormGroup;
  erreur!:string;
  constructor(private auth: AuthentificationService,
              private router : Router, 
              private formbuilder : FormBuilder,
              private http : HttpClient)  {}

  ngOnInit() :void
  {
    this.erreur = '';
    this.loginForm = this.formbuilder.group
    (
      {
        email: [null],
        pass: [null],       
      }
    ) ;
  }
  onLogin() : void
  {
    this.auth.login();
    this.router.navigateByUrl('accueil/description');
  }

  onConnect()
  {
    this.router.navigateByUrl('authentification/inscription');
  }

  onSubmit()
  {
    const obj = this.loginForm.value;
    this.http.post('http://localhost:3000/api/login', obj, { observe: 'response' }).subscribe
    (
      (response: HttpResponse<any>) => 
      {
        if (response.status === 200) 
        {
          console.log(response.statusText)
          this.router.navigateByUrl(`accueil`);
        }
        
      },
      error => 
      {
        
        if (error.status === 404) 
        {
          this.erreur = 'Adresse deja exixtante Veuillez réessayer!!';
          console.log(error);
        //  console.log(error.statusText)
          //this.router.navigateByUrl(`authentification/login`);
        }
        if (error.status === 500) 
        {
          this.erreur = 'Erreur système réessayer plus tard'
        //  console.log(error.statusText)
          //this.router.navigateByUrl(`authentification/login`);
        }
        console.error(error.body); // Afficher l'erreur à l'utilisateur
      } 
    ) ;  

  }
}
