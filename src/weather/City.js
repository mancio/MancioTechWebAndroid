import {useEffect, useState} from "react";
import {getHumanTime, getTodayWeather} from "./WeatherHandler";
import { Card } from 'semantic-ui-react'
import './City.css';
import React from "react";

export default function City(props){

    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const cityName = props.name;

    useEffect(() => {

        async function fetchData() {
            if(!loaded){
                const res = await getTodayWeather(cityName);
                setData(res);
            }
        }

        fetchData().then(r => {
            setLoaded(true);
        });

    },[loaded,cityName])


    return(
        <div id={props.id}>
            {(typeof data.main != 'undefined') ? (
                <Card className='weather-card' >
                    <Card.Content>
                        <Card.Header className="weather-header">{data.name}</Card.Header>
                        <p>Temperature: {data.main.temp + ' C'}</p>
                        <p>Sunrise: {getHumanTime(data.sys.sunrise)}</p>
                        <p>Sunset: {getHumanTime(data.sys.sunset)}</p>
                        <p>Description: {data.weather[0].description}</p>
                    </Card.Content>
                </Card>
            ): (
                <div> <p> Data not found </p> </div>
            )}
        </div>
    )
}
