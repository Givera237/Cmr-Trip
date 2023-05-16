import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Site } from 'src/app/core/models/site';

@Component({
  selector: 'app-site-list-item',
  templateUrl: './site-list-item.component.html',
  styleUrls: ['./site-list-item.component.scss']
})
export class SiteListItemComponent
 {
  @Input() site!: Site;
  //get siteTitre() { return (this.site && this.site.titre) ? this.site.titre : null }
}
