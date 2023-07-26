import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController, NavController, NavParams } from '@ionic/angular';
import { MovieService } from '../../servicios/movie.service';
import { GameService } from '../../servicios/game.service';
import { AnimeService } from '../../servicios/anime.service';
import { SeriesService } from '../../servicios/series.service';
import { BookService } from '../../servicios/book.service';



@Component({
    selector: 'modal',
    templateUrl: './modal.page.html',
  })

export class ModalComponent implements OnInit{
  

  player:any;
  action:any;
  type: any[] = [];
  data: any[] = [];
  stars: number[] = [1, 2, 3, 4, 5];
  selectedStars: number = 0;
  answer: String = "";
  public name: String;
  public date: String;
  public score: number | undefined;
  public typeM: number;
  public media: String;
  public hours: number | undefined;
  public pages: number | undefined;
  public temp: number | undefined;
  
 
  constructor( private modalController: ModalController, private movieService: MovieService, private gameService: GameService, private animeService: AnimeService , private serieService: SeriesService, private bookService: BookService) {
    this.name = '';
    this.date = '';
    this.typeM = 0;
    this.media = '';
   }

  ngOnInit() {
    this.loadTypeMedia();
  }


  loadTypeMedia(){
    this.movieService.loadTypeMedia().subscribe((res: any) => {
      //this.dateChange(res);
      this.type = res;
    });
  }

  register(){
     /* if (this.nombre.trim().length == 0) {
        //this.dialogoNotificacion("Debe completar todos los campos");
        console.log("Debe completar todos los campos");
      } else {*/
       /* for (let index = 0; index < this.type.length; index++) {
          if(this.type[index].name == this.typeM){

          }
          
        }*/
        if(this.media=='Peliculas'){
          this.movieService.registerMovie({ name: this.name, date:  this.date, score: this.selectedStars, type: this.typeM }).subscribe((respuesta: any) => {
            //this.dialogoNotificacion(respuesta);
           // console.log(respuesta);
            this.answer = respuesta;

          });
        }

        if(this.media=='Juegos'){
          this.gameService.registerGame({ name: this.name, date:  this.date, score: this.selectedStars, type: this.typeM, hours: this.hours }).subscribe((respuesta: any) => {
            //this.dialogoNotificacion(respuesta);
            console.log(respuesta);
          });
        }

        if(this.media=='Anime'){
          this.animeService.registerAnime({ name: this.name, date:  this.date, score: this.selectedStars, type: this.typeM, temp: this.temp }).subscribe((respuesta: any) => {
            //this.dialogoNotificacion(respuesta);
            console.log(respuesta);
          });
        }

        if(this.media=='Series'){
          this.serieService.registerSerie({ name: this.name, date:  this.date, score: this.selectedStars, type: this.typeM, temp: this.temp }).subscribe((respuesta: any) => {
            //this.dialogoNotificacion(respuesta);
            console.log(respuesta);
          });
        }

        if(this.media=='Libros'){
          this.bookService.registerBook({ name: this.name, date:  this.date, score: this.selectedStars, type: this.typeM, pages: this.pages }).subscribe((respuesta: any) => {
            //this.dialogoNotificacion(respuesta);
            console.log(respuesta);
          });
        }

        this.closeModal();

     /* }*/
  }

 
  closeModal() {
    this.modalController.dismiss();
  }





  rate(stars: number) {
    if (this.selectedStars === stars) {
      // Si se hace clic en la misma cantidad de estrellas, deseleccionar todas
      this.selectedStars = 0;
    } else {
      // Marcar la cantidad de estrellas seleccionadas y las anteriores
      this.selectedStars = stars;
    }
  }

  isStarActive(star: number) {
    return star <= this.selectedStars;
  }







  

}