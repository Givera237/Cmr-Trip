import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/utilisateurs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent
 {
  inscriptionForm!: FormGroup;
  user!: Utilisateur;

  constructor(private http : HttpClient, 
              private formbuilder : FormBuilder,
              private router : Router){}

/*
              onSubmit(data: any)
              {
                const obj = JSON.stringify(data);

                this.http.post(`http://localhost:3000/api/register`, obj).subscribe
                (
                  (reponse) => 
                  {
                    console.log(reponse)
                  }
                )
                console.log(obj);
              }
      */         

  ngOnInit() : void
  {
    this.inscriptionForm = this.formbuilder.group
    (
      {
        nom: [null],
        prenom: [null],
        email: [null],
        pass: [null],
        role: [null],
      }
    ) 
     
  }

  onSubmit(): void
  {
    const obje = JSON.stringify(this.inscriptionForm);
    const obj = JSON.stringify(this.inscriptionForm);
   
/*
    let jsonStr = JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (visitedObjects.has(value)) {
          return '[Circular]';
        }
        visitedObjects.add(value);
      }
      return value;
    }); */




    this.http.post(`http://localhost:3000/api/register`, obje).subscribe
    (
      (reponse) => 
      {
        console.log(obje)
      }
    )
  } 

  onConnect() : void
  {
    this.router.navigateByUrl(`authentification/login`);
  }
 }
