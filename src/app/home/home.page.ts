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
import { ModalComponent } from '../core/component/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: any[] = [];
  type: any[] = [];
  movies: Movie[] = [];
  books: Book[]=[];
  results: any[] = [];
  selectedSegment = '';
  regNum: number = 0;
  typeM: number = 0;


  constructor(private modalController: ModalController, private alertController: AlertController, private movieService: MovieService, private bookService: BookService, private animeService: AnimeService , private gameService: GameService, private serieService: SeriesService, private actionSheetController: ActionSheetController) {}

  ngOnInit() {
    this.clear();
    this.loadMedia();
    this.loadTypeMedia();
  }


  loadMovie(){
    this.movieService.loadMovie().subscribe((res: any) => {
      this.dateChange(res);
      this.data = res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  loadMedia(){
    this.movieService.loadMedia().subscribe((res: any) => {
      this.dateChange(res);
      this.data = res;
      this.results = this.data;
      this.regNum = this.results.length;
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
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  loadGame(){
    this.gameService.loadGame().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }


  loadAnime(){
    this.animeService.loadAnime().subscribe((res: any) => {
      this.dateChange(res);
      this.data=res;
      this.results = this.data;
      this.regNum = this.results.length;
    });
  }

  loadSerie(){
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
  }

  refrescar(){
    this.ngOnInit();
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    this.selectedSegment = selectedValue;
    switch (selectedValue) {
      case 'all':
        this.clear();
        this.loadMedia();
        break;
      case 'peliculas':
        this.clear();
        this.loadMovie();
        break;
      case 'series':
        this.clear();
        this.loadSerie();
        break;
      case 'anime':
        this.clear();
        this.loadAnime();
        break;
      case 'juegos':
        this.clear();
        this.loadGame();
        break;
      case 'libros':
        this.clear();
        this.loadBook();
        break;
      default:
        break;
    }
    
  }

  
  

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    this.results = this.data.filter((d) => d.media_name.toLowerCase().indexOf(query) > -1);
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


  async abrirModal(/*player: any*/) {
    console.log("abrirModal");
    const modal = await this.modalController.create({
      component: ModalComponent,
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
    console.log(query);
   this.results = this.data.filter((d) => d.type_name.toLowerCase().indexOf(query) > -1);
  }

  filterScore(event: any) {
    const query = event.target.value.toLowerCase();

    this.results = this.data.filter((d) => {
        const scoreAsString = d.score.toString().toLowerCase();
        return scoreAsString.indexOf(query) > -1;
    });
}

  filterYear(event: any){
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => { 
      const dateAsString = new Date(d.date).getFullYear().toString().toLowerCase();
      return dateAsString.indexOf(query) > -1;
      
    });

  }

}

