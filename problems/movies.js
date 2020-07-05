
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieList) {
    return movieList.map(movie => movie.director)
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movieList) {
    return movieList
            .filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length

}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieList){

    let {length} = movieList

    if (!length) {
        return 0
    }

    return parseFloat((movieList
                        .filter(movie => 'rate' in movie)
                        .reduce((total, movie) => {return total + movie.rate},0)/length)
                        .toFixed(2))
   
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieList) {

    let dramaList = movieList
                    .filter(movie => ('rate' in movie) && movie.genre.includes('Drama'));
    let {length} = dramaList;

    if (!length) {
        return 0
    }

    return parseFloat((dramaList.reduce((total, movie) => {
        return total + movie.rate},0)/length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movieList) {
    if (!movieList.length) {
        return []
    }
    return movieList.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title) )
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieList) {
    

    return  movieList.map(a => ({...a}))
                    .sort((a,b) => a.title
                    .localeCompare(b.title))
                    .map(movie => movie.title)
                    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


//Helper Function
function convertToMinutes(s) {
    

    let time = s.split('')
    let hours;
    let mins
    
    //If there are hours and minutes string length will be over 5
    if (time.length > 5) {
        hours = time.slice(0,time.indexOf('h')).join('');
        mins = time.slice(time.indexOf(' ')+1,time.indexOf('m')).join('');
        return  parseInt(hours)*60 + parseInt(mins)

    } 
    //if only hours given
    else if (time.includes('h') && time.length < 3) {
        hours = time.slice(0,time.indexOf('h'))
        return parseInt(hours)*60 
    } 
    //If only minutes given
    else {
        mins = s.slice(time.indexOf(' ')+1,time.indexOf('m'));
        return parseInt(mins)
    
    }


}


function turnHoursToMinutes(movieList) {
    let newArr = []
    
    //deep copy made
    movieList.map(a => ({...a}))
        .forEach(movie => {
            movie.duration = convertToMinutes(movie.duration);
            newArr.push(movie);
        })

    return newArr

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movieList) {
    //will store yearly scores
    let films = {}
    //will store highest rated in format [year, average]
    let high = [null, 0];

    if (!movieList.length) {
        return null
    }

    //categorise ratings for each year
    //format: {1989: [9,8,7,6, ...], 2000: [8,6,8,9,...], ...}
    movieList.forEach((movie) => {

        if(!films.hasOwnProperty(movie.year)) {
            films[movie.year] = [movie.rate]
        } else {
            films[movie.year].push(movie.rate)
        }
    })

    //format: {1989: 8, 2000: 6.8}
    for (let year in films) {
        //calculate average to 2 d.p.
        films[year] = parseFloat((films[year]
                        .reduce((a,b)=> a +b)/films[year].length).toFixed(2))

        //update high score as we iterate
        if (films[year]>high[1]) {
            high = [year, films[year]]
        }
        
      }

    return `The best year was ${high[0]} with an average rate of ${high[1]}`
}



/*

problem statements: https://github.com/ironhack-labs/lab-javascript-greatest-movies?fbclid=IwAR1z8eX-usEJPLcpBPGBrv8vGdu3RbOAeZ59Z_2tCpXrlxOowDcAqJmNc3g

instructor solutions: https://gist.github.com/josecarneiro/8f1e2cc4a6bf7e45947416522155ec14?fbclid=IwAR2fgpoaOcy-2TRy3_wqPb1hW25qqluItaHMgH7qSAAaNh80AhCt93geTJs



*/