import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficheRechercheRoutingModule } from './recherche-routing.module';
import { AfficheRechercheComponent } from './components/affiche-recherche/affiche-recherche.component';
import { RechercheComponent } from '../accueil/components/recherche/recherche.component';



@NgModule({
  declarations: 
  [

  
    RechercheComponent
  ],
  imports: 
  [
    CommonModule,
    AfficheRechercheRoutingModule
  ],
  
})
export class RechercheModule { }
