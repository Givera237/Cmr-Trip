import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppModule } from "src/app/app.module";
import { Site } from "src/app/core/models/site";
import { environment } from "src/environments/environment.development";

@Injectable()

export class AccueilService
{
    constructor(private http : HttpClient){}
    //site!: Observable <Site[]>

    getSites(): Observable<Site[]>
    {
       return this.http.get<Site[]>('http://localhost:3000/api/findall/post');
    }
  
}




/*
  getSites(): Observable <Site[]>
    {
        return this.http.get<Site[]>(`${environment.apiUrl}/posts`);
       //return this.http.get<Site[]>(' http://localhost:3000/api/posts');
    }

*/