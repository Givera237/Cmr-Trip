import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.scss']
})
export class FormulaireAjoutComponent
 {
  sitesForm!: FormGroup;
  
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit ()
  {
    this.sitesForm = this.formBuilder.group({
      titre: [null],
      contenu: [null],
      adresse: [null],
      type: [null],
      categorie: [null],
      region: [null],
      ville: [null],

  });
  }
  onSubmitForm() {
    console.log(this.sitesForm.value);
}
}
