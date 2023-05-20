import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { Site } from 'src/app/core/models/site';
import { AccueilService } from '../../services/accueil.services';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent 
{
  //site$!: Observable <Site[]>; <app-site-list-item *ngFor="let site of site$ | async"  [site]="site" >  </app-site-list-item>
  sites!: Site[];
  site!:Observable<Site[]> ;

  
  constructor(private route : ActivatedRoute,
    private http : HttpClient ){}

ngOnInit() 
{
  this.http.get<any>('http://localhost:3000/api/findall/post').subscribe(reponse  => 
  {
    this.sites = reponse.data;
    console.log('Yo bro voici tes objets', reponse.data[0].id_posts);
  }
  )

}


  
}
