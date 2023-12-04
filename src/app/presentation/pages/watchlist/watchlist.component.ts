import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/data/models/movie.interface';
import { WatchlistService } from 'src/app/data/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit{
  watchlist: Movie[] = [];

  constructor(private watchlistService: WatchlistService) {
  }

  ngOnInit() {
    this.watchlist = this.watchlistService.getWatchlist();
    console.log('Watchlist:', this.watchlist);
  }
  onDelete(movie: Movie) {
    this.watchlistService.removeMovie(movie);
    this.watchlist = this.watchlistService.getWatchlist();
}
}
