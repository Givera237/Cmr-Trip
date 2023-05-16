import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { CoreModule } from './core/core.module';
import { AccueilService } from './accueil/services/accueil.services';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/components/accueil/accueil.component';
import { DefileImageComponent } from './accueil/components/defile-image/defile-image.component';
import { Site } from './core/models/site';
import { SiteAccueilComponent } from './accueil/components/site-accueil/site-accueil.component';
import { SiteListComponent } from './accueil/components/site-list/site-list.component';
import { SiteListItemComponent } from './accueil/components/site-list-item/site-list-item.component';
import { ListeComponent } from './liste/liste.component';




@NgModule({
  declarations:
   [
    AppComponent,
    ListeComponent,
  
 
  
  ],
  imports: 
  [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgImageSliderModule,
    AuthentificationModule
  ],
  providers: [AccueilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
