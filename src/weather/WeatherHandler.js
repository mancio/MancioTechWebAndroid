import {API_key} from "../passwords/Passwords";

export const cities = ['Bologna', 'Cracovia', 'Canazei'];

const unit = 'metric';

export const getTodayWeather = function (city){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_key + '&units=' + unit)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(er =>{
            console.log("unable to check weather");
            console.log(er);
            return "undefined";
        });
}

export const getWeatherMapUrl = function (){
    return 'https://openweathermap.org/weathermap?basemap=map&cities=false&layer=radar&lat=52&lon=20&zoom=5';
}

export const getHumanTime = function (timestamp){

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(timestamp * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    return 'h: ' + hours + ' : min: ' + minutes.substr(-2) + ' : sec: ' + seconds.substr(-2);
}

