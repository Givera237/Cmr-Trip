import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Site } from "src/app/core/models/site";
import { AccueilService } from "../services/accueil.services";

@Injectable()

export class SiteResolver implements Resolve<Site[]>
{
    constructor(private siteService : AccueilService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Site[]> 
    {
    
        return this.siteService.getSites();

    }

}