import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/components/accueil/accueil.component';
import { DescriptionComponent } from './accueil/components/description/description.component';
import { FormulaireAjoutComponent } from './publication/components/formulaire-ajout/formulaire-ajout.component';
import { AuthentificationGuard } from './core/guards/authentification.guard';

const routes: Routes = 
[
  {path: '', component: AccueilComponent },
  {path: 'accueil', loadChildren: () => import('./accueil/accueil.module').then (m => m.AccueilModule) },
  {path : 'description', component: DescriptionComponent,  canActivate :[AuthentificationGuard]},
  {path : 'ajout', component: FormulaireAjoutComponent, canActivate :[AuthentificationGuard]}
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
