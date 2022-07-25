import axios from "axios";
import {geoApiKey} from "../../passwords/Passwords";

export const getMyIP = async function (){
    return axios.get('https://api.ipify.org?format=json')
        .then(r => {
            return r.data.ip;
        })
        .catch(error => {
            console.log(error);
            return '0';
        })
}

export const getGeoInfo = function (ip){
    return axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=' + geoApiKey
        + '&ip=' + ip + '&fields=country_name,city,time_zone')
        .then(r => {
            let time = r.data.time_zone.current_time;
            time = time.substring(0, time.length-5);
            console.log(time);
            const city = r.data.city;
            const country = r.data.country_name;
            console.log(city + ', ' + country);
            return {time, city, country};
        }).catch(error => {
            console.log(error);
        })
}

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric' ,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};

export const getRealTime = function (curTime){
    return new Date(curTime).toLocaleDateString('en-GB', options);
}

export const addOneSec = function (curTime){
    const date = new Date(curTime);
    date.setSeconds(date.getSeconds()+1);
    return date.getTime();
}