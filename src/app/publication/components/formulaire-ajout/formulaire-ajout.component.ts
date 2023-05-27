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
  imagesInput!: any;
  //event !: any

  

  constructor(private formBuilder:FormBuilder) { }

    ngOnInit(): void {
      this.sites = this.formBuilder.group({
          titre: [null],
          contenu: [null],
          //imageUrl: [null],
          adresse: [null],
          type: [null],
         // region: [null],
          ville: [null],
          //categorie: [null],
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
  onSubmitForm() 
  {
    console.log(this.sites.value);
  }

  onFileChange(event : any) 
  {
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }
    const formData = new FormData();
    for (let file of files) {
      formData.append('images[]', file, file.name);
    }
  }

  onSubmit() {
    const formData = new FormData();
    const imagesData = this.imagesInput.nativeElement;
    if (imagesData.files.length === 0) {
      return;
    }
  
    const images = Array.from({ length: imagesData.files.length }, (_, i) => imagesData.files[i]); // Convertit le FileList en tableau
       for (const file of images) {
        formData.append('images', file);
      }
  
}
}
/*

 










           <div>
            <img *ngFor='let url of urls' [src]="url" > <br>
            <input type="file" (change)="onSelect($event)" multiple>
        </div>

*/