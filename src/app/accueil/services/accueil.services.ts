import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Site } from "src/app/core/models/site";
import { environment } from "src/environments/environment.development";
import { Image } from "src/app/core/models/image";

@Injectable()

export class AccueilService
{
    constructor(private http : HttpClient){}
    //site!: Observable <Site[]>
    val_titre!: string;
    sites!:Site

    getSites(): Observable<Site[]>
    {
       return this.http.get<Site[]>('http://localhost:3000/api/findall/post');
    }
  
    getSiteById(id_post : number): Observable <Site>
    {
      return this.http.get<Site>(`http://localhost:3000/api/post/${id_post}`);
    }

    getImages(): Observable<Image[]>
    {
      return this.http.get<Image[]>('http://localhost:3000/api/image_imagesuploads');
    }

    getImagesById(id_post : number): Observable<Image[]>
    {
        return this.http.get<Image[]>(`http://localhost:3000/api/findbypk/image_imagesuploads/${id_post}`);
    }
}




/*
  getSites(): Observable <Site[]>
    {
        return this.http.get<Site[]>(`${environment.apiUrl}/posts`);
       //return this.http.get<Site[]>(' http://localhost:3000/api/posts');
    }

*/