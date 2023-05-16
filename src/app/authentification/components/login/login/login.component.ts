import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/authentification-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{ 
  constructor(private auth: AuthentificationService,
              private router : Router )  {}

  ngOnInit() :void
  {

  }
  onLogin() : void
  {
    this.auth.login();
    this.router.navigateByUrl('accueil/description');
  }

}
