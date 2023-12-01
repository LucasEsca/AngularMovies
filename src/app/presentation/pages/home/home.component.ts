import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/data/services/movies.service';
import { Movie } from 'src/app/data/models/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayMovies: Movie[] = [];

  constructor(private moviesS: MoviesService) {}

  ngOnInit(): void {
    this.moviesS.movieList.subscribe((data) => {
      this.arrayMovies = data;
      console.log(this.arrayMovies);
    });
  }
}
