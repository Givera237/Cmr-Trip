import { Component , OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { post } from '../../models/post';


@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.scss']
})
export class FormulaireAjoutComponent implements OnInit{

  sites!: FormGroup;
  sitePreview$!: Observable<post>;
  

  constructor(private formBuilder:FormBuilder) { }

    ngOnInit(): void {
      this.sites = this.formBuilder.group({
          titre: [null],
          contenu: [null],
          imageUrl: [null],
          adresse: [null],
          type: [null],
          region: [null],
          ville: [null],
          categorie: [null],
          latitude: [null],
          longitude: [null]
      });
     /* this.sitePreview$ = this.sites.valueChanges;*/
      this.sitePreview$ = this.sites.valueChanges.pipe(
        map(formValue =>({
          ...formValue,
          createDate: new Date()
          
        }))
    );
  }
  onSubmitForm() {
    console.log(this.sites.value);
}
  }


