import {Injectable} from '@angular/core';
import {IMovie} from './movie';

@Injectable()
export class MovieService {
    getMovies(): IMovie[] {
        return [{
            "movieId": 4,
            "movieName": "Sully",
            "movieStar": "Hanks",
            "releaseDate": "9/9/2016",
            "price": 16.00,
            "starRating": 3.5,
            "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTg5NTUwNDIyOV5BMl5BanBnXkFtZTgwMjI2OTc3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
            {
                "movieId": 5,
                "movieName": "Wild Life",
                "movieStar": "Albert",
                "releaseDate": "9/9/2016",
                "price": 14.00,
                "starRating": 5.0,
                "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjA4OTE0MjAwNl5BMl5BanBnXkFtZTgwMjY4Mzg2OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
            }];
    }
}
