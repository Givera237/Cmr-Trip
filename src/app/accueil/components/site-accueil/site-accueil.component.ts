import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Site } from 'src/app/core/models/site';
import { AccueilService } from '../../services/accueil.services';
import { Image } from 'src/app/core/models/image';

@Component({
  selector: 'app-site-accueil',
  templateUrl: './site-accueil.component.html',
  styleUrls: ['./site-accueil.component.scss']
})
export class SiteAccueilComponent 
{

  sites!: Site[];  
  img$!: Observable<Image[]>;
  images!: Image[];

  constructor(private route : ActivatedRoute,
    private http : HttpClient,
    private titre : AccueilService,
    private router : Router ){}


    

    ngOnInit() : void
    {
      this.http.get<Site[]>('http://localhost:3000/api/findall/post').subscribe(reponse  => 
      {
        this.sites = reponse;
        //console.log('Yo bro voici tes objets', reponse);
      }
      )

      this.img$ = this.titre.getImages();
      this.img$.subscribe(data => 
        {
          this.images = data;
          
        }
        )

      
    }
    getId_post(titres : string) : void
    {
        
    }

   onViewSite(id_post : number) : void
   {
    this.router.navigateByUrl(`accueil/${id_post}`);
   }

   

   
  }