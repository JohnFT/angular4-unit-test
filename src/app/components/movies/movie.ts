export class Movie {
    price: Number;
    name: String;
    description: String;
    cover: String;

    constructor(movie: any) {
        this.price = movie.price;
        this.name = movie.name;
        this.description = movie.description;
        this.cover = movie.cover;
    }
}