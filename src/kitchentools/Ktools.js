import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import "./Ktools.css";
import {Hydration} from "./Hydration";
import {IngQuantity} from "./IngQuantity";

export default function Ktools(){

    const back = getMenuItemByTag('back');

    return(
        <div>
            <div className='cooking-tools-title'>
                <h1>Cooking Tools</h1>
                <p>Here you can find some useful cooking calculators</p>
            </div>
            <div className='cooking-calc-box'>
                <Hydration/>
                <IngQuantity/>
            </div>
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