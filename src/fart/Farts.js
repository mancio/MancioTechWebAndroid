import './Farts.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {askToStop, getNamesOfFarts, playArmageddonFart, playRandomFart, playSingleFart} from "./FartLogic";

export default function Farts(){

    const backButton = getMenuItemByTag('back');


    return(
        <div className='fart-page'>
            <h1 className='fart-title'>🤣 🤣 Farting page 🤣 🤣</h1>
            <h3 className='fart-desc'>
                If you ever wonder if a JS library to make your page fart exist....
                well YES!
            </h3>
            <p>
                Unfortunately the famous jsFart library is not maintained anymore so I decided to write my own code in
                much more simple "React Style" way. <a href='http://jsfart.com' rel="noreferrer" target="_blank">CLicK HeRe!</a> to visit
                the old library or visit my <a href='https://github.com/mancio/MancioTechWeb'>GitHub</a> for the new implementation.
            </p>
            <div className='fart-control-panel'>
                <button onClick={() => playRandomFart()} className='fart-button'>Random Fart</button>
                {getNamesOfFarts().map(name => {
                    return(
                        <button onClick={() => playSingleFart(name)} className='fart-button'>{name}</button>
                    )
                })}
                <button onClick={() => playArmageddonFart()} className='fart-button'>Armageddon</button>
                <button onClick={() => askToStop()} className='fart-button'>Stop farting</button>
            </div>
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