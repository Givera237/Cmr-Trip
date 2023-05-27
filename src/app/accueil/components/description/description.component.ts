import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Site } from 'src/app/core/models/site';
import { AccueilService } from '../../services/accueil.services';
import { CommonModule } from '@angular/common';
import { Image } from 'src/app/core/models/image';
import { Defile } from '../../models/defile';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent 
{
 site$!:Observable<Site> ;
 site!: Site;
 img$!: Observable<Image[]>
 image!: Image[];
 defile!: Defile[];


 constructor(private route : ActivatedRoute,
  private http : HttpClient,
  private accueil : AccueilService ){}


  ngOnInit() 
  {
     
   const siteId = +this.route.snapshot.params['id'];

   this.site$ = this.accueil.getSiteById(siteId);
   this.img$ = this.accueil.getImagesById(siteId);

   this.site$.subscribe( data =>
    {
      this.site = data;
      //console.log('Yo bro voici tes objets', this.site);
    }

   );

   this.img$.subscribe(reponse =>
    {
      this.image = reponse;
      console.log('Yo bro voici tes images', this.image);
    }
    


    )
/*
    for (let i = 0; i < this.image.length; i++) 
    {
      this.defile[i].image = this.image[i].path;
      this.defile[i].thumbImage = this.image[i].path;
      this.defile[i].title = 'Quelle belle image'
    }
    
*/
   
  }
}
