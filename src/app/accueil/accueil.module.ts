import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DefileImageComponent } from './components/defile-image/defile-image.component';
import { SiteAccueilComponent } from './components/site-accueil/site-accueil.component';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { SiteResolver } from './resolvers/site.resolver';
import { SitesServices } from '../core/services/sites.services';



@NgModule({

  providers :
  [
    SitesServices,
    SiteResolver
  ],
  declarations: 
  [
    AccueilComponent,
    DefileImageComponent,
    SiteAccueilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgImageSliderModule
  ],

  exports : 
  [
    AccueilComponent,
    DefileImageComponent,
    SiteAccueilComponent
  ]
})
export class AccueilModule { }
