import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Utils } from "../utilidades/util";

@Injectable({
    providedIn: 'root'
  })
  
  export class AnimeService {
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

  loadAnime(): Observable<any[]>{
    return this.http.get<any>(this.urlModulo+'listAnime/', this.httpOptions2);
  }

  registerAnime(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.urlModulo + "registerAnime", Utils.getFormData(data), this.httpOptions2
    );
  }

  deleteAnime(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.urlModulo + "deleteAnime", Utils.getFormData(data), this.httpOptions2
    );
  }
}