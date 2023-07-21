import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Book } from "../modelos/book.model";
import { Utils } from "../utilidades/util";

@Injectable({
    providedIn: 'root'
  })
  
  export class BookService {
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

  loadBook(): Observable<any[]>{
    return this.http.get<any>(this.urlModulo+'listBook/', this.httpOptions2);
  }

  registerBook(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.urlModulo + "registerBook", Utils.getFormData(data), this.httpOptions2
    );
  }
}