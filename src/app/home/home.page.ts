import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/servicios/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  characters: number[] = [1, 2, 3, 4, 5,6,7,8,9,10];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    console.log("Hola");
    this.movieService.loadMovie().subscribe((res: any) => {
      console.log(res);
    });
  }

}

