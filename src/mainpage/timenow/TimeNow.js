import './TimeNow.css';
import {addOneSec, getMyIP, getRealTime, getGeoInfo} from "./TimeNowHandler";
import {useEffect, useState} from "react";
import React from "react";

export default function TimeNow(){

    const [ip, setIp] = useState('0');
    const [time, setTime] = useState('0');
    const [city, setCity] = useState('updating');
    const [country, setCountry] = useState('updating');
    const [stop, setStop] = useState(false);

    useEffect(() => {
        if (ip === '0') getMyIP().then(r => setIp(r));
        if (ip !== '0' && time === '0') getGeoInfo(ip).then(geo => {
            setTime(geo.time);
            setCity(geo.city);
            setCountry(geo.country);
        });
        if (time !== '0' && !stop){
            setTimeout(()=>{
                setTime(addOneSec(time));
            },1000);
        }
    },[ip, time, stop]);

    useEffect(()=>{
        return () =>{
            // to remove timer before unmount the page
            setStop(true);
            clearTimeout();
        }
    },[stop])

    return(
        <div className='time-city-ip'>
            <p> Today is {time === '0' ? 'time updating' : getRealTime(time)} in {city}, {country} </p>
            <p> According to your IP address: {ip} </p>
        </div>
    )
}