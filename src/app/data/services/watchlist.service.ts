import { Injectable } from '@angular/core';
import { Movie, WatchList } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService implements WatchList {
  private localStorageKey = 'movieList';

  movies: Movie[] = [];

  constructor() {
    this.loadMovies();
  }

  clearWatchlist(): void {
    this.movies = [];
    this.saveMovies();
  }

  addMovie(movie: Movie): void {
    if (!this.movies.find((m) => m.id === movie.id)) {
      movie.isOnList = true;
      this.movies.push(movie);
      this.saveMovies();
    }
  }

  removeMovie(movie: Movie): void {
    movie.isOnList = false;
    this.movies = this.movies.filter((m) => m.id !== movie.id);
    this.saveMovies();
  }

  isInWatchlist(movieId: number): boolean {
    return this.movies.some(movie => movie.id === movieId);
  }

  getWatchlist(): Movie[] {
    return this.movies.filter((movie) => movie.isOnList);
  }

  private loadMovies(): void {
    const storedData = localStorage.getItem(this.localStorageKey);
    this.movies = storedData ? JSON.parse(storedData) : [];
  }

  private saveMovies(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.movies));
  }
}
