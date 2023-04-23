import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/components/accueil/accueil.component';
import { DescriptionComponent } from './accueil/components/description/description.component';

const routes: Routes = 
[
  {path: '', component: AccueilComponent },
  {path : 'description', component: DescriptionComponent}
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
