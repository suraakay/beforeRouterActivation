import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from './movies.database';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  selectedMovie : Movie ;
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  getMovies() {
    this.movieService.getMovies().subscribe(movieS => this.movies = movieS);
  }
  addMovie(name) {
    this.movies.push(new Movie(this.movies.length,name,false,'No comment...','11.png'));
  }
  selected(movie){  
    this.selectedMovie = movie;  
  }
  updateMovie(movieName){
    this.selectedMovie.name = movieName;
    this.selectedMovie = null;
  }

  ngOnInit(): void {
    this.getMovies();
  }

}
