import Players from "./Players";
import Play from "./Play";
import {useState} from "react";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import Winner from "./Winner";
import React from "react";

export default function Intro(){

    const [page, setPage] = useState('Players');

    const back = getMenuItemByTag('back');

    function changePage(value){
        setPage(value);
    }

    function switcher(page){
        switch (page) {
            case 'Players':
                return <Players page={changePage}/>;
            case 'Play':
                return <Play page={changePage}/>;
            case 'Winner':
                return <Winner/>;
            default:
                return <p> Error.... </p>
        }
    }

    return(
        <div>
            {switcher(page)}
            <div>
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
        </div>
    )

}