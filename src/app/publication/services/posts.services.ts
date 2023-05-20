import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { post } from "src/app/publication/models/post";
import { environment } from "src/environments/environment.development";

@Injectable()

export class PostsService
{
    constructor(private http : HttpClient){}

    getPosts(): void
    {
        //this.http.post<post[]>(`${environment.apiUrl}/posts`);   
     }
    
}