import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Site } from 'src/app/core/models/site';
import { AccueilService } from '../../services/accueil.services';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent 
{
  site$!:Observable<Site> ;
  site: Site = new Site();
  recherche!: Site;

  constructor(private route : ActivatedRoute,
    private http : HttpClient,
    private accueil : AccueilService ){}


    ngOnInit()
    {
      const nom = this.route.snapshot.params['nom'];

      this.site$ = this.accueil.getSiteByNom(nom);
      
      this.site$.subscribe( data =>
        {
          this.site = data;
          console.log('Yo bro voici tes objets', this.site);
        }
    
       );
       ;
    }

    isObject(value: Site): boolean {  return typeof value === 'object'; }
}
