import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/components/accueil/accueil.component';
import { DescriptionComponent } from './accueil/components/description/description.component';
import { SiteListItemComponent } from './accueil/components/site-list-item/site-list-item.component';
import { SiteListComponent } from './accueil/components/site-list/site-list.component';
import { SiteResolver } from './accueil/resolvers/site.resolver';

const routes: Routes = 
[
  {path: 'accueil', loadChildren: () => import('./accueil/accueil.module').then (m => m.AccueilModule) },
  {path: 'publication', loadChildren: () => import('./publication/publication.module').then (m => m.PublicationModule) },
  {path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then (m => m.AuthentificationModule) }, 
  {path: 'recherche', loadChildren: () => import('./recherche/recherche.module').then (m => m.RechercheModule) }, 
  { path: '**', redirectTo: 'saccueil'}
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
