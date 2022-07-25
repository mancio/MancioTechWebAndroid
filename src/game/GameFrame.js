import React, {useState} from "react";
import Iframe from 'react-iframe'
import {getGameByTag} from "./GameHandler";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {useParams} from "react-router-dom";
import "./GameFrame.css";

function GameFrame(){
    const params = useParams();
    console.log('params:' + params);
    const game = getGameByTag(params.tag);
    const backButton = getMenuItemByTag('back');

    const [width, setWidth] = useState(game.gameWidth);
    const [height, setHeight] = useState(game.gameHeight);
    const [text, setText] = useState(true);

    const [padding, setPadding] = useState(500);

    function zoom(plusmin){
        if(plusmin === 0){
            setText(false);
        }
        if(plusmin === '+') {
            setHeight(height * 1.1);
            setWidth(width * 1.1);
            const newPad = padding * 1.1;
            document.getElementById('game-box').style.paddingBottom = (newPad).toString() + 'px';
            setPadding(newPad);
        }
        if(plusmin === '-' && height > game.gameHeight/1.25){
            setHeight(height/1.1);
            setWidth(width/1.1);
            const newPad = padding / 1.1;
            document.getElementById('game-box').style.paddingBottom = (newPad).toString() + 'px';
            setPadding(newPad);
        }
        if(plusmin === '=') {
            setHeight(game.gameHeight);
            setWidth(game.gameWidth);
            document.getElementById('game-box').style.paddingBottom = (500).toString() + 'px';
            setPadding(500);
        }
    }

    return(
        <div>
            <div className='game-zoom'>
                {/*<p>Game size</p>*/}
                <button onClick={() => zoom('-')}>-</button>
                <button onClick={() => zoom('+')}>+</button>
                <button onClick={() => zoom('=')}>=</button>
                <button onClick={() => zoom(0)}>NO TEXT</button>
            </div>
            <div className='game-container' id='game-box'>
                <Iframe
                    url={game.src}
                    width={width}
                    height={height}
                    frameBorder={game.frameBorder}
                    allowFullScreen={game.allowFullScreen}
                    className="game-iframe"
                    display="initial"
                />
            </div>

            {
                text && <>
                    <div className='game-desc'>
                        <p>{game.title} - {game.platform}</p>
                        <p>Did you tried using Xbox Gamepad? Will be fun!</p>
                        <p>Remember to save game before leave this page!</p>
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
                        tag='game'
                    />
                </>
            }
        </div>
    )
}

export default GameFrame;