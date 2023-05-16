import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Site } from 'src/app/core/models/site';
import { AccueilService } from '../../services/accueil.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent 
{
  site$!: Observable <Site[]>

  constructor(private route : ActivatedRoute){}

ngOnInit() 
{
  this.site$ = this.route.data.pipe(map(data => data['site'] ));
}

  
}
