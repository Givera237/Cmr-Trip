import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccueilService } from './accueil/services/accueil.services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { HttpStatusInterceptor } from './interceptors/auth.interceptors';
import { MapCompComponent } from './map-comp/map-comp.component';






@NgModule({
  declarations:
   [
    AppComponent,
    ListeComponent,
    MapCompComponent
   
  ],
  imports: 
  [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule

  ],
  providers: [
    AccueilService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpStatusInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
