import "./ScopaCounter.css";
import {cards} from "./ScoreLogic";
import {useState} from "react";
import React from "react";

export default function ScopaCounter(){

    const [score, setScore] = useState(0);
    const [comp, setComp] = useState('');

    function sumPoints(points, cardName){
        const newComp = comp + ' ' + cardName;
        setComp(newComp);
        setScore(score + points);
    }

    function resetScore(){
        setComp('');
        setScore(0);
    }

    return(
        <div className='scopa-board-counter'>
            <p>Click on the card to add to the total Primera score</p>
            {cards.sort((a,b) => b.primera - a.primera).map(obj => {
                return(
                    <button key={obj.name + '-card'} className='card-button-pic' onClick={() => sumPoints(obj.primera, obj.name)}>
                        <img src={obj.pic} alt='card'/>
                    </button>
                )
            })}
            <p>Total score: [ {comp} ] = {score}</p>
            <button className='primera-reset-bt' onClick={() => resetScore()}>Reset score</button>
        </div>
    )
}