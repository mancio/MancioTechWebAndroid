import React from "react";
import {useNavigate} from "react-router-dom";

function GameButton(props){

    const navigate = useNavigate();

    function clicked(){
        navigate('/play/' + props.tag);
    }

    return(
        <div>
            <button id={props.id} className='menu-button' onClick={clicked}>
                <svg className='design-button' xmlns="http://www.w3.org/2000/svg" width={props.svgWidth} height={props.svgHeight}>
                    <rect width={props.svgWidth} height={props.svgHeight} rx="27.5" fill={props.buttonColor}/>
                    <text  x="50%" y="60%" className='button-text' dominantBaseline="middle" textAnchor="middle" fill={props.textColor} stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em">{props.title}</text>
                </svg>
            </button>
        </div>
    );

}

export default GameButton;