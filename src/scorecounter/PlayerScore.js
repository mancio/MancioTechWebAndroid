import {players, saveScore} from "./ScoreLogic";
import "./PlayerScore.css";
import SinglePlayerCounter from "./SinglePlayerCounter";
import {useEffect, useState} from "react";
import React from "react";

export default function PlayerScore(props){

    const gameTag = 'score-card-' + props.gametype + '-player-';
    const [reset, setReset] = useState(true);

    function resetScore(){
        players.forEach(pl => {
            saveScore(gameTag + pl, "0");
            setReset(false);
        })
    }

    useEffect(resetScore => {
        if(!reset) setReset(true);
    },[reset])

    return(
        <div className='player-score-board'>
            {players.map(pl => {
                return (<SinglePlayerCounter key={gameTag + pl} plnum={pl} gametag={gameTag} reset={reset}/>)
            })}
            <button className='reset-score-pl-button' onClick={() => resetScore()}>Reset Score</button>
            <p className='score-pl-note'>Score will be automatically saved to Browser cache on every change</p>
        </div>
    )
}