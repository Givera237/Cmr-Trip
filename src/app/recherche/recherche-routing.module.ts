import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AfficheRechercheComponent } from "./components/affiche-recherche/affiche-recherche.component";


const routes : Routes =
[
    {path : 'affiche', component: AfficheRechercheComponent, /*canActivate :[AuthentificationGuard]*/}

]


@NgModule
(
    {
        imports : 
        [
            RouterModule.forChild(routes)
        ],
        exports: 
        [
            RouterModule
        ]
    }
)


export class AfficheRechercheRoutingModule
{

}