import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Movie } from "../modelos/movie.model";

@Injectable({
    providedIn: 'root'
  })
  
  export class MovieService {
    urlModulo: string = environment.urlAPI;

    constructor(private http: HttpClient) {
    console.log('Servicio HTTP');
  }

  httpOptions2 = {
    headers: new HttpHeaders({
      "mimeType": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    })
  };

  loadMovie(): Observable<any[]>{
    return this.http.get<any>(this.urlModulo+'listMovie/', this.httpOptions2);
  }

  loadMedia(): Observable<any[]>{
    return this.http.get<any>(this.urlModulo+'listMedia/', this.httpOptions2);
  }

  loadTypeMedia(): Observable<any[]>{
    return this.http.get<any>(this.urlModulo+'listTypeMedia/', this.httpOptions2);
  }
}