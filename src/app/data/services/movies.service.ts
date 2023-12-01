import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  originalMovies: Movie[] = [];
  arrayMovies: Movie[] = [];
  arrayObs: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);


  constructor(private http: HttpClient) {
    this.loadMovies();
  }

  private loadMovies() {
    this.http.get<Movie[]>('../../../assets/data/Movies.JSON').subscribe((movies) => {
      this.arrayObs.next(movies);
    });
  }

  get movieList() {
    return this.http.get<Movie[]>('../../../assets/data/Movies.JSON')
      .pipe(
        tap((movies) => {
          this.originalMovies = [...movies];
          this.arrayMovies = [...movies];
          this.arrayObs.next(this.arrayMovies);
        })
      );
  }

  getMovieDetail(id: number): Observable<Movie | undefined> {
    return this.arrayObs.pipe(
      map((movies) => movies.find((movie) => movie.id === id))
    );
  }

  getOriginalOrder(): Movie[] {
    return [...this.originalMovies];
  }

  
}
