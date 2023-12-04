export interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  duration: string;
  genre: string;
  rDate: CustomDate;
  trailer: string;
  image: string;
  isOnList: Boolean;
}

export interface CustomDate {
  year: number;
  month: number;
  day: number;
}

export interface WatchList {
  movies: Movie[];
  addMovie(movie: Movie): void;
  removeMovie(movie: Movie): void;
}