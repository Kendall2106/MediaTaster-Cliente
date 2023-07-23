import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Book } from "../modelos/book.model";
import { Utils } from "../utilidades/util";

@Injectable({
    providedIn: 'root'
  })
  
  export class SeriesService {
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

  loadSeries(): Observable<any[]>{
    return this.http.get<any>(this.urlModulo+'listSerie/', this.httpOptions2);
  }

  registerSerie(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.urlModulo + "registerSerie", Utils.getFormData(data), this.httpOptions2
    );
  }

  deleteSerie(data: any): Observable<any[]> {
    console.log("aja "+data.id);
    return this.http.post<any[]>(this.urlModulo + "deleteSerie", Utils.getFormData(data), this.httpOptions2
    );
  }
}