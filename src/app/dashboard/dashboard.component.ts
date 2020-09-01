import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movies.database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];

  constructor(public movieService : MovieService) { }

  getMovies(){
    this.movieService.getMovies().subscribe(allMovies => (this.movies = allMovies));
    return this.movies;
  }
  
  ngOnInit(): void {
    this.getMovies();
  }

}
