import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireAjoutComponent } from './components/formulaire-ajout/formulaire-ajout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './services/posts.services';
import { PublicationRoutingModule } from './publication-routing.module';


@NgModule({

  providers :
  [
    PostsService
  ] ,
  declarations: [
    FormulaireAjoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublicationRoutingModule
  ],
  exports:[
    FormulaireAjoutComponent
  ]
})
export class PublicationModule { }
