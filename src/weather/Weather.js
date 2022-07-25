import './Weather.css';
import City from "./City";
import {cities} from "./WeatherHandler";
import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import Map from "./Map";

export default function Weather(){

    const backButton = getMenuItemByTag('back');
    let id = 0;

    return(
        <div>
            <h1 className='weather-title'>How is going in my favourite places?</h1>
            <div className='weather-card-box'>
                {cities.map(city => {
                    console.log(city)
                    const currentId = id++;
                    return(
                        <City
                            name={city}
                            id={currentId}
                            key={currentId}
                        />
                    )
                })}
            </div>
            <Map/>
            <ButtonTemplate
                key={backButton.id}
                id={backButton.id}
                width={backButton.width}
                height={backButton.height}
                svgColor={backButton.svgColor}
                textColor={backButton.textColor}
                textField={backButton.textField}
                icon={backButton.icon}
                iconColor={backButton.iconColor}
                tag='menu'
            />
        </div>
    )
}