import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/data/models/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  constructor(
    private router: Router
  ) {}
 
  onAddToList() {
  }
  onDelete() {
  }
  goToDetail() {
    this.router.navigate(['']);
  }
  
}
