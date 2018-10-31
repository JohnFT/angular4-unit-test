import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  private movies: Array<Movie>;
  constructor() {
      this.movies = [
          {
              "price": 20000,
              "name": "The Shawshank Redemption",
              "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
              "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
          },
          {
              "price": 25000,
              "name": "The Godfather: Part II",
              "description": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
              "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
          }
      ]
  }

  getAll(): Array<Movie> {
      return this.movies;
  }

  push(movie: Movie) {
      this.movies.push(movie);
  }
}
