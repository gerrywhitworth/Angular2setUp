import {Component} from '@angular/core';

@Component({
    selector: 'mm-movies',
    templateUrl: 'app/movies/movie-list.component.html'
})

export class MovieListComponent {
    pageTitle: string = 'Movie List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    seePoster: boolean = false;
    listFilter: string = 'Titanic';

    movies: any[] = [
        {
            "movieId": 2,
            "movieName": "Titanic",
            "movieStar": "DiCaprio",
            "releaseDate": "3/13/2016",
            "price": 16.00,
            "starRating": 4.2,
            "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMzg1MDA0MTU2Nl5BMl5BanBnXkFtZTcwMTMzMjkxNw@@._V1_.jpg"
        },
        {
            "movieId": 3,
            "movieName": "Jaws",
            "movieStar": "Shaw",
            "releaseDate": "4/13/2016",
            "price": 16.00,
            "starRating": 4.8,
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTdiNmRhNzUtZWViMi00YmE5LWJhYTItYWRhOGVjNTdhNTViXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        }
    ];

    toggleImage(): void {
        this.seePoster = !this.seePoster;
    }
}
