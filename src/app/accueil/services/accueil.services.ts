import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Site } from "src/app/core/models/site";
import { environment } from "src/environments/environment.development";

@Injectable()

export class AccueilService
{
    constructor(private http : HttpClient){}

    getSites(): Observable <Site[]>
    {
        return this.http.get<Site[]>(`${environment.apiUrl}/posts`);
    }


}