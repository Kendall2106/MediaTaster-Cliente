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

  constructor(private movieService: MovieService, private bookService: BookService, private animeService: AnimeService , private gameService: GameService, private serieService: SeriesService) {}

  ngOnInit() {

  }

  loadMovie(){
    this.movieService.loadMovie().subscribe((res: any) => {
      this.data=res;
    });
  }


  loadBook(){
    this.bookService.loadBook().subscribe((res: any) => {
      this.data=res;
    });
  }

  loadGame(){
    this.gameService.loadGame().subscribe((res: any) => {
      this.data=res;
    });
  }


  loadAnime(){
    this.animeService.loadAnime().subscribe((res: any) => {
      this.data=res;
    });
  }

  loadSerie(){
    this.serieService.loadSeries().subscribe((res: any) => {
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
        this.loadMovie();
        break;
    }
  }

  clear(){
    this.data = [];
  }

}

