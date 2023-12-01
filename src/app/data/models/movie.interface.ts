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
}

export interface CustomDate {
  year: number;
  month: number;
  day: number;
}