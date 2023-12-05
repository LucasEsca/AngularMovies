import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../models/login.interface';
import { WatchlistService } from './watchlist.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean = false;

  constructor(private watchlistService: WatchlistService) { }

  login(credentials: Login): Observable<boolean> {
    
    const isValid = this.checkCredentials(credentials);

    if (isValid) {
      this._isLoggedIn = true;
      this.watchlistService.clearWatchlist();
      return of(true); 
    } else {
      this._isLoggedIn = false;
      return of(false); 
    }
  }

  logout(): void {
    this._isLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  private checkCredentials(credentials: Login): boolean {
    return credentials.userName === 'appMovieUser' && credentials.password === 'authMovie30-11';
  }

  isAuthenticated(): boolean {
    return this._isLoggedIn;
  }
}
