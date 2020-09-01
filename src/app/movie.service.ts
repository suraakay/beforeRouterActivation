import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, Movies } from './movies/movies.database';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService : LoggingService) { }


  getMovies(): Observable<Movie[]> {
    this.loggingService.setLog('Action : Listed Films')
    return of(Movies);
  }
}

