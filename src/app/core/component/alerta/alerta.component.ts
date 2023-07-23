import { Component, Input, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss'],
})
export class AlertaComponent implements OnInit {

  @Input() mensaje:String = "";
  constructor(){

  }

  ngOnInit() {
    this.notificar('Hola, este es un ejemplo de notificación');
  }

  notificar(info:String){
    this.mensaje = info;
    console.log(this.mensaje);
    $('#modal-notificar').modal('show');
  }

}
