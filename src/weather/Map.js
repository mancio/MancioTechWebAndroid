import Iframe from "react-iframe";
import {getWeatherMapUrl} from "./WeatherHandler";
import './Map.css';

export default function Map(){
    return(
        <div>
            <Iframe
                className='weather-map'
                url={getWeatherMapUrl()}
                width="700px"
                height="450px"
                display='initial'
            />
        </div>
    )
}