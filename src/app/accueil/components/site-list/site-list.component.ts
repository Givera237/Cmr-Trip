import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Site } from 'src/app/core/models/site';
import { AccueilService } from '../../services/accueil.services';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit
{
  site$!: Observable <Site[]>;
  site!: Site[];
  a!: Site;

  constructor(private route : ActivatedRoute, private http : HttpClient){}

ngOnInit() 
{
  //this.site$ = this.route.data.pipe(map(data => data['site'] ));
  //this.http.get<Site[]>('http://localhost:3000/api/findall/post').subscribe(data => {this.site = data; });
  this.http.get<Site[]>('http://localhost:3000/api/findall/post').subscribe(reponse =>
  
{
  this.site = reponse;
  console.log(this.site);
}
  


  ) 
  
 // this.a = this.site[1];
}

  
}
/*<app-site-list-item *ngFor="let site of site$ | async"  [site]="site" >  </app-site-list-item>*/