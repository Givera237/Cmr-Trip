import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthentificationGuard } from "../core/guards/authentification.guard";
import { FormulaireAjoutComponent } from "./components/formulaire-ajout/formulaire-ajout.component";

const routes : Routes =
[
    {path : 'ajout', component: FormulaireAjoutComponent, /*canActivate :[AuthentificationGuard]*/}

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


export class PublicationRoutingModule
{

}