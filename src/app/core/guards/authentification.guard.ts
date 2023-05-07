import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthentificationService } from "../services/authentification-service";

@Injectable
(
    {
        providedIn : 'root'
    }
)
export class AuthentificationGuard implements CanActivate {

    constructor
    (
        private auth : AuthentificationService,
        private router : Router 
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
    {
        const token = this.auth.getToken();
        if (token)
        {
            return true;
        }
        else
        {
            this.router.navigateByUrl('/authentification/login');
            return false;
        }
    }
}