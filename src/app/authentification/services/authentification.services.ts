import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Utilisateur } from "../models/utilisateurs";
import { FormGroup } from "@angular/forms";

@Injectable()

export class AuthentificationServices
{

    inscriptionForm!: FormGroup;
    
    constructor(private http : HttpClient){}
    
    addUtilisateur() : Observable<Utilisateur>
    {
        return this.http.post<Utilisateur>(`http://localhost:3000 /api/register`, this.inscriptionForm)
    }

}