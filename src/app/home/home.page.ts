import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../core/servicios/movie.service';
import { Movie } from '../core/modelos/movie.model';
import { BookService } from '../core/servicios/book.service';
import { Book } from '../core/modelos/book.model';
import { AreaComponent } from '../core/component/area/area.component';
import { async } from '@angular/core/testing';
import { AnimeService } from '../core/servicios/anime.service';
import { GameService } from '../core/servicios/game.service';
import { SeriesService } from '../core/servicios/series.service';
import { ActionSheetController, AlertController, IonicSafeString, ModalController } from '@ionic/angular';
import { ModalComponent } from '../core/component/modal/modal.component';
import { AlertaComponent } from '../core/component/alerta/alerta.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: any[] = [];
  type: any[] = [];
  years: any[] = [];
  movies: Movie[] = [];
  books: Book[]=[];
  results: any[] = [];
  selectedSegment = 'all';
  regNum: number = 0;
  typeM: number = 0;
  defaultValue: String = 'Todos';
  typeName: String = "";
  prevYear: number = 0;
  miSelectValue: String = this.defaultValue;
  miSelectValue2: String = this.defaultValue;
  miSelectValue3: String = this.defaultValue;

  constructor(private modalController: ModalController, private alertController: AlertController, private movieService: MovieService, private bookService: BookService, private animeService: AnimeService , private gameService: GameService, private serieService: SeriesService, private actionSheetController: ActionSheetController) {

  }

  ngOnInit() {
    this.clear();
    this.loadMedia();
    this.loadTypeMedia();
  }


  loadMovie(){
    this.clear();
    this.movieService.loadMovie().subscribe((res: any) => {
      this.dateChange(res);
      this.data = res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  loadMedia(){
    this.clear();
    this.movieService.loadMedia().subscribe((res: any) => {
      this.dateChange(res);
      this.data = res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  

  loadBook(){
    this.clear();
    this.bookService.loadBook().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  loadGame(){
    this.clear();
    this.gameService.loadGame().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }


  loadAnime(){
    this.clear();
    this.animeService.loadAnime().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  loadSerie(){
    this.clear();
    this.serieService.loadSeries().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  loadTypeMedia(){
     this.movieService.loadTypeMedia().subscribe((res: any) => {
      //this.dateChange(res);
      this.type = res;
      
    });
    return this.type;
  }

  dateChange(res:any){
    for (let index = 0; index < res.length; index++) {
      const dateTemp = new Date(res[index].date); 
      res[index].date = (dateTemp.getDate()+1)+'/'+(dateTemp.getMonth()+1)+'/'+dateTemp.getFullYear();
    }
  }

  refrescar(){
    //console.log(this.selectedSegment);
    switch (this.selectedSegment) {
      case 'peliculas':
        this.loadMovie();
        break;
      case 'series':
        this.loadSerie();
        break;
      case 'anime':
        this.loadAnime();
        break;
      case 'juegos':
        this.loadGame();
        break;
      case 'libros':
        this.loadBook();
        break;
      default:
        break;
    }
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    this.selectedSegment = selectedValue;
  }

  sacarAnio(dataYear: any){
    let year: any = dataYear[0].date;
    for (let index = 0; index < dataYear.length; index++) {
      
      
    }
  }
  

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    this.results = this.data.filter((d) => d.media_name.toLowerCase().indexOf(query) > -1);
    this.regNum = this.results.length;
  }

  clear(){
    this.data = [];
    this.results = [];
    this.regNum = this.results.length;
  }



   async presentAlert(data: any, select:any) {
    let men = '';
    if(select=='series' || select == 'anime'){
       men = 'Temporadas: '+data.Temp;
    }else if(select=='juegos'){
      men = 'Horas: '+data.hours;
    }else if(select=='libros'){
      men = 'Paginas: '+data.pages;
    }
   /* const alert = await this.alertController.create({
      header: data.media_name,
      subHeader: 'Categoria: '+ data.type_name,
      message: men,
      buttons: ['OK']
    });
    

    await alert.present();*/


    console.log('wat '+data.idAnime)
    const modal = await this.modalController.create({
      component: AlertaComponent,
      componentProps: {
        title: data.media_name,
        category: data.type_name,
        message: men,
        id: data.id,
        seleccion: select
        // Aquí puedes agregar más props y sus valores
      },
      mode: 'ios'
    });

    modal.onDidDismiss().then(() => {
      // Se ejecuta después de que el modal se haya cerrado
      this.refrescar();
    });

    modal.style.cssText = '--max-width: 80%; --height:40%';
    modal.present();

   // this.refrescar();
  }

  
  async abrirModal(/*player: any*/) {
    console.log("abrirModal");
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    modal.onDidDismiss().then(() => {
      // Se ejecuta después de que el modal se haya cerrado
      this.refrescar();
    });
    await modal.present();
  }

  getBadgeColor(typeName: string): any {
    let color ='';
    switch (typeName) {
      case 'Comedia':
        color = 'orange';
        break;
      case 'Terror':
        color = 'black';
        break;
      case 'Romance':
        color = 'red';
        break;
      case 'Accion':
        color = 'green';
        break;
      case 'Fantasia':
        color = 'purple';
        break;
      case 'Ciencia Ficcion':
        color = 'gray';
        break;
      default:
        color = 'blue';
        break;
    }
    return { 'background-color': color || 'default-color' };
  }

  filterType(event: any){
    const query = event.target.value.toLowerCase();
    if(query==="todos"){
      this.results =this.data;
    }else{
      this.results = this.results.filter((d) => d.type_name.toLowerCase().indexOf(query) > -1);
      
    }
    this.regNum = this.results.length;
  }

  filterScore(event: any) {
    const query = event.target.value.toLowerCase();
    if(query==="todos"){
      this.results =this.data;
    }else{
    this.results = this.results.filter((d) => {
        const scoreAsString = d.score.toString().toLowerCase();
        return scoreAsString.indexOf(query) > -1;
    });
  }
    this.regNum = this.results.length;
}

  filterYear(event: any){
    const query = event.target.value.toLowerCase();
    if(query==="todos"){
      this.results =this.data;
    }else{
    this.results = this.results.filter((d) => { 
      var parts = d.date.split("/");
      var year = parseInt(parts[2], 10);
      /*const anio = new Date(d.date).getFullYear();
      */console.log(year);
      const dateAsString = year.toString();
      
      return dateAsString.toLowerCase().indexOf(query) > -1;
    });
  }
    this.regNum = this.results.length;
  }

  registerType(nombre:any){
    this.movieService.registerType({name: nombre}).subscribe((respuesta: any) => {
      //this.dialogoNotificacion(respuesta);
      console.log(respuesta);
    });
    this.loadTypeMedia();
  }

  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'Crear cuenta:',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre',
          type: 'text',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            this.registerType(data.nombre);
           
          }
        }
      ]
    });

    await alert.present();
  }

  restaurarSelect() {
    // Restaurar el valor del select al valor predeterminado
    this.miSelectValue = this.defaultValue;
    this.miSelectValue2 = this.defaultValue;
    this.miSelectValue3 = this.defaultValue;
  }

  async deleteFilter(){
    this.results =this.data;
    this.regNum = this.results.length;
    this.restaurarSelect();
    //AlertaComponent.prototype.notificar('hola');
  }









  currentPage: number = 0;
  itemsPerPage: number = 3;
  
  next() {
    this.currentPage++;
  }

  // Función para retroceder a la página anterior.
  prev() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  // Función para verificar si hay más páginas a la derecha.
  hasNext() {
    return (this.currentPage + 1) * this.itemsPerPage < this.results.length;
  }

  // Función para verificar si hay más páginas a la izquierda.
  hasPrev() {
    return this.currentPage > 0;
  }

  // Función para obtener los ítems que se mostrarán en la página actual.
  getCurrentItems() {
    const startIndex = this.currentPage * this.itemsPerPage;
    return this.results.slice(startIndex, startIndex + this.itemsPerPage);
  }

  



}

