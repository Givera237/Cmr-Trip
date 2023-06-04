import { Component , OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { post } from '../../models/post';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.scss']
})
export class FormulaireAjoutComponent implements OnInit{

  siteForm!: FormGroup;
  sitePreview$!: Observable<post>;
  imagesInput!: any;
  //event !: any

  

  constructor(private formBuilder:FormBuilder,
              private http : HttpClient,
              private router : Router)
               { }

    ngOnInit(): void {
      this.siteForm = this.formBuilder.group({
          titre: [null],
          contenu: [null],
          //imageUrl: [null],
          adresse: [null],
          lib_type: [null],
          lib_region: [null],
          lib_ville: [null],
          //categorie: [null],
          latitude: [null],
          longitude: [null]
      });
     /* this.sitePreview$ = this.sites.valueChanges;*/
      this.sitePreview$ = this.siteForm.valueChanges.pipe(
        map(formValue =>({
          ...formValue,
          createDate: new Date()
          
        }))
    );
    
  }
  onSubmitForm() 
  {
    
    const obj = this.siteForm.value;
    const obje = JSON.stringify(obj);
    console.log(obje);
    const id = environment.id_utilisateur;
    this.http.post(`http://localhost:3000/api/post/${id}`, obj, { observe: 'response' }).subscribe
    (
      (response: HttpResponse<any>) => 
      {
        if (response.status === 200) 
        {
          console.log(response.statusText)
          console.log('Post bien envoyé')
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
    )
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