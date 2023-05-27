import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SiteListComponent } from "./components/site-list/site-list.component";
import { SiteResolver } from "./resolvers/site.resolver";
import { AuthentificationGuard } from "../core/guards/authentification.guard";
import { DescriptionComponent } from "./components/description/description.component";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { SiteListItemComponent } from "./components/site-list-item/site-list-item.component";

const routes: Routes =
[
    {path: '', component: AccueilComponent },
    {path : 'liste', component : SiteListComponent,/* resolve: {sites : SiteResolver }*/  },
    {path : ':id', component: DescriptionComponent,  /*canActivate :[AuthentificationGuard]*/},
    {path: 'item', component: SiteListItemComponent}
]


@NgModule
(
    {
        imports: 
        [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    }
) 

export class AccueilRoutingModule
{

}