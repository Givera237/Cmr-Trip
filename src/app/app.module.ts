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






@NgModule({
  declarations:
   [
    AppComponent,
    ListeComponent
   
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
