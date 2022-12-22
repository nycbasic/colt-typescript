// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movie = {
    readonly title: string,
    originalTitle?: string,
    director: string,
    releaseYear:  number,
    boxOffice: {
        budget: number,
        grossUS: number,
        grossWorldWide: number
    }
}

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Dune V",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldWide: 400671789,
    }
}

const cats: Movie = {
    title: "Cats",
    director: "Tom Hopper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldWide: 73833348
    }
}

// write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
const getProfit = (movie: Movie): number => {
    const {budget, grossWorldWide} = movie.boxOffice;
    return grossWorldWide - budget;
}
// output: number - 2116652
