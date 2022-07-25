import {getScoreAllPlayers, getTotalPlayers} from "./PlayersHandler";
import './Winner.css';
import React from "react";

export default function Winner(){

    const scoreAllPlayers = getScoreAllPlayers(getTotalPlayers());

    let counter = 0;

    return(
        <div>
            <div className='winner-list'>
                {scoreAllPlayers.map(score => {
                    counter++;
                    return(<p key={counter}> Player {counter}: {score} </p>)
                })}
            </div>
        </div>
    )
}