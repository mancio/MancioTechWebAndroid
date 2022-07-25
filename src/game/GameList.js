import React from "react";
import {getGameList} from "./GameHandler";
import GameButton from "./GameButton";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import NoGame from "./NoGame";
import {genRandomColor} from "../logic/RandomColorGenerator";
import {isMobileOnly} from "react-device-detect";
import './GameList.css';

class GameList extends React.Component{
    render() {
        const list = getGameList();
        const backButton = getMenuItemByTag('back');
        if(isMobileOnly) return <NoGame returnState={this.props.returnState}/>
        return(
            <div>
                <div className='game-list-container'>
                    <div className='game-button-list'>
                        {list.map(item =>{
                            return(
                                <GameButton
                                    key={item.id}
                                    id={item.id}
                                    svgWidth={item.svgWidth}
                                    svgHeight={item.svgHeight}
                                    buttonColor={genRandomColor()}
                                    textColor={item.textColor}
                                    title={item.title}
                                    tag={item.tag}
                                />
                            )
                        })}
                    </div>
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
                    tag='menu'
                />
            </div>
        )
    }
}

export default GameList;