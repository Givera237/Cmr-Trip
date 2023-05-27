import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: 
  [
    LoginComponent,
    InscriptionComponent
  ],
  imports:
   [
    CommonModule,
    AuthentificationRoutingModule,
    ReactiveFormsModule,
     HttpClientModule,
     FormsModule
  ]
})
export class AuthentificationModule { }
