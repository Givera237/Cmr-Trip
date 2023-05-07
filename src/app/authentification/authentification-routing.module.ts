import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login/login.component";

const routes: Routes =
[
    {path : 'authentification/login', component : LoginComponent }
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

export class AuthentificationRoutingModule
{

}