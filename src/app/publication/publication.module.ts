import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireAjoutComponent } from './components/formulaire-ajout/formulaire-ajout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormulaireAjoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormulaireAjoutComponent
  ]
})
export class PublicationModule { }
