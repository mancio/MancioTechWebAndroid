import React from "react";
import './SiteDesign.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import GitLogo from "./GitLogo";

class SiteDesign extends React.Component{
    render() {
        const back = getMenuItemByTag('back');
        return(
            <div>
                <div className='design-dashboard'>
                    <h1 className='dashboard-title'>How this works?</h1>
                    <p className='dashboard-text'>
                        This web site is made in ReactJS. React use the power of JSX to give the
                        possibility to write html code with inside javascript variables, hooks and whatever
                        you need to make it "Reactive"
                    </p>
                    <a rel="noreferrer" href="https://github.com/mancio/MancioTechWeb" target="_blank">
                        <GitLogo/>
                    </a>
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
}

export default SiteDesign;