import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AccueilModule } from './accueil/accueil.module';
import { DescriptionComponent } from './accueil/components/description/description.component';


@NgModule({
  declarations:
   [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent,
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    AccueilModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
