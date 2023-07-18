import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: any[] = [];
  movies: Movie[] = [];
  books: Book[]=[];

  selectedSegment = '';

  constructor(private alertController: AlertController, private movieService: MovieService, private bookService: BookService, private animeService: AnimeService , private gameService: GameService, private serieService: SeriesService, private actionSheetController: ActionSheetController) {}

  ngOnInit() {

  }

  loadMovie(){
    this.movieService.loadMovie().subscribe((res: any) => {
      this.dateChange(res);
      this.data = res;
    });
  }

  dateChange(res:any){
    for (let index = 0; index < res.length; index++) {
      const dateTemp = new Date(res[index].date); 
      res[index].date = dateTemp.getDate()+'/'+(dateTemp.getMonth()+1)+'/'+dateTemp.getFullYear();
    }
  }

  loadBook(){
    this.bookService.loadBook().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
    });
  }

  loadGame(){
    this.gameService.loadGame().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
    });
  }


  loadAnime(){
    this.animeService.loadAnime().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
    });
  }

  loadSerie(){
    this.serieService.loadSeries().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
    });
  }

  refrescar(){
    this.ngOnInit();
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    this.selectedSegment = selectedValue;
    // Aquí puedes hacer lo que desees con el valor seleccionado
    switch (selectedValue) {
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
        this.clear();
        break;
    }
  }

  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    this.data = this.data.filter((d) => d.media_name.toLowerCase().indexOf(query) > -1);
  }

  clear(){
    this.data = [];
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
    const alert = await this.alertController.create({
      header: data.media_name,
      subHeader: 'Categoria: '+ data.type_name,
      message: men,
      buttons: ['OK']
    });
    

    await alert.present();
  }



}

