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
  sortByTitle: boolean = false;
  sortByDate: boolean = false;

  constructor(private moviesS: MoviesService) {}

  ngOnInit(): void {
    this.moviesS.movieList.subscribe((data) => {
      this.arrayMovies = data;
      console.log(this.arrayMovies);
    });
  }

  sortList(order: string): void {
    switch (order) {
      case 'default':
        this.arrayMovies = this.moviesS.getOriginalOrder();
        break;
      case 'titleAsc':
        this.arrayMovies = this.arrayMovies.slice().sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleDesc':
        this.arrayMovies = this.arrayMovies.slice().sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'dateAsc':
        // Orden por fecha ascendente
        this.arrayMovies = this.arrayMovies.slice().sort((a, b) => {
          const dateA = new Date(a.rDate.year, a.rDate.month - 1, a.rDate.day);
          const dateB = new Date(b.rDate.year, b.rDate.month - 1, b.rDate.day);
          return dateA.getTime() - dateB.getTime();
        });
        break;
      case 'dateDesc':
        // Orden por fecha descendente
        this.arrayMovies = this.arrayMovies.slice().sort((a, b) => {
          const dateA = new Date(a.rDate.year, a.rDate.month - 1, a.rDate.day);
          const dateB = new Date(b.rDate.year, b.rDate.month - 1, b.rDate.day);
          return dateB.getTime() - dateA.getTime();
        });
        break;
    }
  }
}
