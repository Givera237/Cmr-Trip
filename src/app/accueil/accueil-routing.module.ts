import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SiteListComponent } from "./components/site-list/site-list.component";
import { SiteResolver } from "./resolvers/site.resolver";

const routes: Routes =
[
    {path : '', component : SiteListComponent, resolve: {sites : SiteResolver }  }
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