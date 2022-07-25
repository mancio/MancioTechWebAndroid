import ButtonTemplate from "../menu/ButtonTemplate";
import React, {useState} from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import "./ScoreCounter.css";
import PlayerScore from "./PlayerScore";
import ScopaCounter from "./ScopaCounter";
import BriscolaCounter from "./BriscolaCounter";

export default function ScoreCounter(){

    const back = getMenuItemByTag('back');

    const [game, setGame] = useState('');

    function selectGame(game){
        setGame(game);
    }

    return(
        <div>
            <div className='score-card-title'>
                <h1>Score counter for Italian Card Games</h1>
                <h2>Please choose your game</h2>
            </div>
            <div className='card-game-list'>
                <button onClick={() => selectGame('Scopa')}>Scopa</button>
                <button onClick={() => selectGame('Briscola')}>Briscola</button>
            </div>
            {
                (game === 'Scopa') &&
                <div>
                    <p className='card-game-name'>{game}</p>
                    <PlayerScore gametype={game}/>
                    <ScopaCounter/>
                    <div className="rules-card-game">
                        <a href="https://www.tisuggerisco.com/il-gioco-della-scopa/" target="_blank" rel="noreferrer">Rules</a>
                    </div>
                </div>

            }
            {
                (game === 'Briscola') &&
                <div>
                    <p className='card-game-name'>{game}</p>
                    <PlayerScore gametype={game}/>
                    <BriscolaCounter/>
                    <div className="rules-card-game">
                        <a href="https://www.dimensionecasino.com/skillgames/briscola/regole-briscola" target="_blank" rel="noreferrer">Rules</a>
                    </div>
                </div>

            }
            <ButtonTemplate
                key={back.id}
                id={back.id}
                width={back.width}
                height={back.height}
                svgColor={back.svgColor}
                textColor={back.textColor}
                textField={back.textField}
                icon={back.icon}
                iconColor={back.iconColor}
                tag='menu'
            />
        </div>
    )
}