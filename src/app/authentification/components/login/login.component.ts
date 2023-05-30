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
  loginForm!: FormGroup
  constructor(private auth: AuthentificationService,
              private router : Router, 
              private formbuilder : FormBuilder,
              private http : HttpClient)  {}

  ngOnInit() :void
  {
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
        if (response.status === 404) 
        {
          console.log('merde combi');
        }
      },
      error => 
      {
        console.error(error); // Afficher l'erreur à l'utilisateur
      } 
    ) ;  

  }
}
