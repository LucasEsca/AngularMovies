import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/data/models/movie.interface';
import { MoviesService } from 'src/app/data/services/movies.service';
import { WatchlistService } from 'src/app/data/services/watchlist.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movieId: number | undefined;
  movieDetail: Movie | undefined;
  safeTrailerUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer,
    private watchListService: WatchlistService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
      this.loadMovieDetail();
    });
  }

  loadMovieDetail() {
    if (this.movieId) {
      this.moviesService.getMovieDetail(this.movieId).subscribe(movie => {
        this.movieDetail = movie;
        if (this.movieDetail && this.movieDetail.trailer) {
          this.safeTrailerUrl = this.generateYouTubeUrl(this.movieDetail.trailer);
        }
      });
    }
  }

  generateYouTubeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onAddToList() {
    if (this.movieDetail) {
      this.watchListService.addMovie(this.movieDetail);
    }
  }

  isInWatchlist(): boolean {
    return this.movieId !== undefined && this.watchListService.isInWatchlist(this.movieId);
  }
}
