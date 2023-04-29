import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/components/accueil/accueil.component';
import { DescriptionComponent } from './accueil/components/description/description.component';
import { FormulaireAjoutComponent } from './publication/components/formulaire-ajout/formulaire-ajout.component';

const routes: Routes = 
[
  {path: '', component: AccueilComponent },
  {path : 'description', component: DescriptionComponent},
  {path : 'ajout', component: FormulaireAjoutComponent}
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
