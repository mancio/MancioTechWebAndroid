import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {getMoviePlatformMenu} from "./SeriesHandler";
import './Platform.css';
import React from "react";

export default function Platform(){

    const back = getMenuItemByTag('back');
    const menu = getMoviePlatformMenu();
    return(
        <div>
            <h1 className='platform-title'>Select your favourite movie platform and see what's new</h1>
            <div className='note-info-platform'>
                <p>
                    NOTE: Prime and HBO research is not so good... I'm still looking
                    for a better service.
                </p>
            </div>
            <div>
                {menu.map(item => {
                    return(
                        <ButtonTemplate
                            key={item.id}
                            id={item.id}
                            width={item.width}
                            height={item.height}
                            svgColor={item.svgColor}
                            textColor={item.textColor}
                            textField={item.textField}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            tag={item.tag}
                        />
                    )
                })}
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