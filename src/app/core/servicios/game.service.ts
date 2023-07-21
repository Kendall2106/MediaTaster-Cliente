import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Book } from "../modelos/book.model";
import { Utils } from "../utilidades/util";

@Injectable({
    providedIn: 'root'
  })
  
  export class GameService {
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

  loadGame(): Observable<any[]>{
    return this.http.get<any>(this.urlModulo+'listGame/', this.httpOptions2);
  }

  registerGame(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.urlModulo + "registerGame", Utils.getFormData(data), this.httpOptions2
    );
  }
}