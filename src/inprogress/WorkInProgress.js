import React from "react";
import WorkSign from "./WorkSign";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";

class WorkInProgress extends React.Component{
    render() {
        const back = getMenuItemByTag('back');
        return(
            <div>
                <WorkSign/>
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

export default WorkInProgress;