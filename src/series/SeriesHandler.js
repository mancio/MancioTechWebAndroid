import {getRandomNumber, idPlusPlus} from "../logic/Counter";
import axios from "axios";
import {unogRapidHost, rapidKey, strAvalHost, theMovieDBKey} from "../passwords/Passwords";
import {handleError} from "../logic/ErrorsHandler";

const textColor = '#ffffff';

const platformButtons = [
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#bd1414',
        textColor: textColor,
        textField:'NETFLIX PL',
        icon: 'TV',
        iconColor: '#bd1414',
        tag: 'netflix'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#1224cd',
        textColor: textColor,
        textField:'HBO US',
        icon: 'TV',
        iconColor: '#1224cd',
        tag: 'hbo'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#ffa200',
        textColor: textColor,
        textField:'PRIME PL',
        icon: 'TV',
        iconColor: '#ffa200',
        tag: 'prime'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#1773ce',
        textColor: textColor,
        textField:'THE MOVIE DB',
        icon: 'TV',
        iconColor: '#1773ce',
        tag: 'themoviedb'
    }
]

export const getMoviePlatformMenu = function (){
    return platformButtons;
}

const netflix_options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/search',
    params: {
        start_year: '2000',
        orderby: 'dateDesc',
        audiosubtitle_andor: 'and',
        start_rating: '7',
        limit: '100',
        subtitle: 'english',
        audio: 'english',
        offset: '0',
        end_year: '2021'
    },
    headers: {
        'x-rapidapi-host': unogRapidHost,
        'x-rapidapi-key': rapidKey
    }
};

const others_options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/basic',
    params: {
        country: 'pl',
        service: '',
        type: '',
        page: '1',
        output_language: 'en',
        language: 'en'
    },
    headers: {
        'x-rapidapi-host': strAvalHost,
        'x-rapidapi-key': rapidKey,
        'Content-Type': 'application/json'
    }
};

let movie_options = JSON.parse(JSON.stringify(others_options));
let series_options = JSON.parse(JSON.stringify(others_options));

movie_options.params.type = 'movie';
series_options.params.type = 'series';

export let movies = [];
export let series = [];

export const clearMediaArrays = function (){
    movies.length = 0;
    series.length = 0;
}

export const searchNetflixMedia = function (){
    clearMediaArrays();
    return axios.request(netflix_options).then(r => {
        r.data.results.filter(m =>{
            if(m.vtype === 'movie') movies.push(m);
            else if (m.vtype === 'series') series.push(m);
            return 'ok';
        })
        return r;
    })
    .catch(function (error) {
        console.error(error);
        handleError(error);
        throw error;
    });
}

const request = function (options, array){
    return axios.request(options).then(res => {
        res.data.results.filter(s => {
            array.push(s);
            return 'ok';
        })
        return res;
    }).catch((er) =>{
        console.error(er);
        throw er;
    })
}

const get = function (url, array){
    return axios.get(url).then(res => {
        console.log(res);
        res.data.results.filter(s => {
            array.push(s);
            return 'ok';
        })
        return res;
    }).catch((er) =>{
        console.error(er);
        throw er;
    })
}

export const searchOtherMedia = function (platform, country){
    clearMediaArrays();
    if(platform === 'prime'){
        movie_options.params.service = 'prime';
        series_options.params.service = 'prime';
    }
    if(platform === 'hbo') {
        movie_options.params.service = 'hbo';
        series_options.params.service = 'hbo';
    }

    movie_options.params.country = country;
    series_options.params.country = country;

    movie_options.params.page = getRandomNumber(1, 50).toString();
    series_options.params.page = getRandomNumber(1, 50).toString();

    console.log(movie_options)

    return axios.all(
        [
            request(series_options,series),
            request(movie_options, movies)
        ]
    ).then(axios.spread((...res) => {
        return 'ok';
    }))
    .catch((error) => {
        console.error(error);
        handleError(error);
        throw error;
    });
}

export const searchMovieDB = function (region){
    clearMediaArrays();
    const page = getRandomNumber(1,50).toString();
    const movie_url = 'https://api.themoviedb.org/3/movie/top_rated?' +
        'api_key=' + theMovieDBKey + '&language=en-US&page=' + page + '&region=' + region;
    const series_url = 'https://api.themoviedb.org/3/tv/top_rated?' +
        'api_key=' + theMovieDBKey + '&language=en-US&page=' + page;
    return axios.all([
        get(movie_url, movies),
        get(series_url, series)
    ]).then(axios.spread((...res) => {
        return 'ok';
    }))
    .catch((error) => {
        console.error(error);
        handleError(error);
        throw error;
    });
}

export const paraMatch = function (media, platform){
    if(platform === 'netflix') {
        return {
            id: media.id,
            title: media.title,
            year: media.year,
            img: media.img,
            desc: media.synopsis,
            rating: media.imdbrating
        }
    } else if(platform === 'themoviedb') {
        return {
            id: media.id,
            title: media.name || media.title,
            year: media.first_air_date || media.release_date,
            img: 'https://image.tmdb.org/t/p/w300' + media.backdrop_path,
            desc: media.overview,
            rating: media.vote_average
        }
    } else {
        return {
            id: media.tmdbID,
            title: media.originalTitle,
            year: media.year,
            img: Object.values(media.backdropURLs)[0],
            desc: media.overview,
            rating: media.imdbRating
        }
    }
}