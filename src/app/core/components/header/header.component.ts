import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent 
{
  rechercheForm!: FormGroup;

  constructor(private formbuilder : FormBuilder,
              private router : Router){}


  ngOnInit()
  {
    this.rechercheForm = this.formbuilder.group
  (
    {
      nom: [null,[Validators.required]],
    }
  ) ;
  }

  onSubmit()
  {
    const nom = this.rechercheForm.value.nom;
    console.log(nom);
    this.router.navigateByUrl(`accueil/recherche/${nom}`);
  }
  
}
