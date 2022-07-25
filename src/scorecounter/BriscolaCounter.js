import "./BriscolaCounter.css";
import {useState} from "react";
import {cards} from "./ScoreLogic";
import React from "react";

export default function BriscolaCounter(){

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

    function printWin(){
        if (score < 60) return " >> You are Loosing << ";
        if (score === 60) return " >> Pair << ";
        if (score > 60) return " >> You Win << ";
    }

    return(
        <div className='briscola-board-counter'>
            <p>Click on the card to add to the total score</p>
            {cards.filter(obj => obj.briscola > 0).sort((a,b) => b.briscola - a.briscola).map(obj => {
                return(
                    <button key={obj.name + '-card'} className='card-button-pic' onClick={() => sumPoints(obj.briscola, obj.name)}>
                        <img src={obj.pic} alt='card'/>
                    </button>
                )
            })}
            <p>Total score: [ {comp} ] = {score} <br/> {printWin()}</p>
            <button className='briscola-reset-bt' onClick={() => resetScore()}>Reset score</button>
        </div>
    )
}