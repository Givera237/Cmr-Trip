import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AccueilService } from 'src/app/accueil/services/accueil.services';
import { Site } from 'src/app/core/models/site';

@Component({
  selector: 'app-affiche-recherche',
  templateUrl: './affiche-recherche.component.html',
  styleUrls: ['./affiche-recherche.component.scss']
})
export class AfficheRechercheComponent 
{
  site$!:Observable<Site> ;
  site!: Site;

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
    }
}
