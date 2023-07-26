import { Component, Injectable, Input, OnInit } from '@angular/core';

declare let $: any;

@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent {
  @Input() data: any[] = [];

  constructor() {}


  /*view(datos: any[]) {
    this.data = datos;
    console.log(this.data);
  }*/
}
