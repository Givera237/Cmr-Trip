import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DefileImageComponent } from './components/defile-image/defile-image.component';
import { SiteAccueilComponent } from './components/site-accueil/site-accueil.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SiteResolver } from './resolvers/site.resolver';
import { SitesServices } from '../core/services/sites.services';
import { AccueilRoutingModule } from './accueil-routing.module';
import { DescriptionComponent } from './components/description/description.component';
import { SiteListComponent } from './components/site-list/site-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SiteListItemComponent } from './components/site-list-item/site-list-item.component';



@NgModule({

  declarations: 
  [
    AccueilComponent,
    DefileImageComponent,
    SiteAccueilComponent,
    DescriptionComponent,
    SiteListComponent,
    SiteListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgImageSliderModule,
    AccueilRoutingModule
  ],
  providers :
  [
    SitesServices,
    SiteResolver
  ],
 
})
export class AccueilModule { }
