import {useEffect, useState} from "react";
import "./SinglePlayerCounter.css";
import {checkScore, saveScore} from "./ScoreLogic";
import React from "react";

export default function SinglePlayerCounter(props){

    const [score, setScore] = useState(parseInt(checkScore(props.gametag + props.plnum)));

    function changeScore(plusMin) {
        if(plusMin === '+') setScore(score+1);
        if(plusMin === '-' && score > 0) setScore(score-1);
    }

    useEffect(() => {
        if(!props.reset) setScore(0);
    },[props.reset])

    useEffect((changeScore) => {
        saveScore(props.gametag + props.plnum, score.toString());
    })

    return(
        <div className='single-pl-score'>
            <button onClick={() => changeScore('-')}>-</button>
            <p>Player {props.plnum}: {score}</p>
            <button onClick={() => changeScore('+')}>+</button>
        </div>
    )
}