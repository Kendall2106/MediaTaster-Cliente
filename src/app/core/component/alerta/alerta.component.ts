import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { BookService } from '../../servicios/book.service';
import { AnimeService } from '../../servicios/anime.service';
import { GameService } from '../../servicios/game.service';
import { SeriesService } from '../../servicios/series.service';
import { MovieService } from '../../servicios/movie.service';

declare let $: any;

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss'],
})
export class AlertaComponent{

  @Input() title: string ="";
  @Input() category: string ="";
  @Input() message: string ="";
  @Input() id: number= 0;
  @Input() seleccion: string ="";

  constructor(private actionSheetCtrl: ActionSheetController,private modalController: ModalController,private movieService: MovieService, private bookService: BookService, private animeService: AnimeService , private gameService: GameService, private serieService: SeriesService){

  }

  closeModal() {
    this.modalController.dismiss();
  }

  deleteMovie(){
    this.movieService.deleteMovie({id: this.id}).subscribe((res: any) => {
      console.log(res);
    });
  }

  deleteAnime(){
    this.animeService.deleteAnime({id: this.id}).subscribe((res: any) => {
      console.log(res);
    });
  }
  deleteSerie(){
    console.log('mmmm ' + this.id);
    this.serieService.deleteSerie({id: this.id}).subscribe((res: any) => {
      console.log(res);
    });
  }
  deleteGame(){
    this.gameService.deleteGame({id: this.id}).subscribe((res: any) => {
      console.log(res);
    });
  }
  deleteBook(){
    this.bookService.deleteBook({id: this.id}).subscribe((res: any) => {
      console.log(res);
    });
  }

  async deleteMedia() {
    if(this.seleccion=='series'){
      this.deleteSerie();
   }else if(this.seleccion=='juegos'){
    this.deleteGame();
   }else if(this.seleccion=='libros'){
     this.deleteBook();
   }else if(this.seleccion=='anime'){
    this.deleteAnime();
   }else if(this.seleccion=='peliculas'){
    this.deleteMovie();
   }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Estás seguro?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteMedia()
            this.closeModal();
          },
        },
        {text: 'Cerrar',role: 'cancel',},
      ],
    });

    await actionSheet.present();
  }

  /*notificar(info:String){
    this.mensaje = info;
    console.log(this.mensaje);
    $('#modal-notificar').modal('show');
  }*/

}
