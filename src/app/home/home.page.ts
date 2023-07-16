import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/servicios/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    console.log("Hola");
    this.movieService.loadMovie().subscribe((res: any) => {
      console.log(res);
    });
  }

}

