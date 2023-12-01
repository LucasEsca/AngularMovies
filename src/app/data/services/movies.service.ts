import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  arrayMovies: Movie[] = [];
  arrayObs: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  constructor(private http: HttpClient) {}
  get movieList() {
    return this.http.get<Movie[]>('../../../assets/data/Movies.JSON');
  }

  get movieDetail(): (id: number) => Observable<Movie | undefined> {
    return (id: number) => {
      return this.arrayObs.pipe(
        map((movies) => movies.find((movie) => movie.id === id))
      );
    };
  }
}
