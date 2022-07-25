import React from "react";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";

class NoGame extends React.Component{
    render() {
        const back = getMenuItemByTag('back');
        return(
            <div>
                <h1>Sorry but running web Arcade on mobile is hard :(</h1>
                <p>Please visit this page on a PC or make your page larger and try again</p>
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
                    tag={back.tag}
                />
            </div>
        )
    }
}

export default NoGame;