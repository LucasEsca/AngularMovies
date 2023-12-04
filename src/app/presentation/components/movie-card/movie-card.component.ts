import { Component, Input } from '@angular/core'
import { Movie } from 'src/app/data/models/movie.interface';
import { WatchlistService } from 'src/app/data/services/watchlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  constructor(
    private watchListService: WatchlistService
  ) {}
 
  onAddToList() {
    this.watchListService.addMovie(this.movie);
    this.movie.isOnList = true;
  }

  isInWatchlist(): boolean {
    return this.watchListService.isInWatchlist(this.movie.id);
  }
}
