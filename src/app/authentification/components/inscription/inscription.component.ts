import { HttpClient,  HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/utilisateurs';
import { NgForm } from '@angular/forms';
import { header } from 'express-validator';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent
 {
  inscriptionForm!: FormGroup;
  user!: Utilisateur;
  nom!: string;
  emailRegex!: RegExp;

  constructor(private http : HttpClient, 
              private formbuilder : FormBuilder,
              private router : Router,
              ){}

       

  ngOnInit() : void
  {
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    this.inscriptionForm = this.formbuilder.group
    (
      {
        nom: [null,[Validators.required]],
        prenom: [null,[Validators.required]],
        email: [null,[Validators.required]],
        pass: [null,[Validators.required]],
       
      }
    ) ;
    
    
    
  } 

  onSubmit() : void
  { 
    const obj = this.inscriptionForm.value;
    this.http.post('http://localhost:3000/api/register', obj, { observe: 'response' }).subscribe
    (
      (response: HttpResponse<any>) => 
      {
        if (response.status === 200) 
        {
          console.log(response.statusText)
          this.router.navigateByUrl(`authentification/login`);
        }
        else 
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




  onConnect() : void
  {
    this.router.navigateByUrl(`authentification/login`);
  }
 }


;


