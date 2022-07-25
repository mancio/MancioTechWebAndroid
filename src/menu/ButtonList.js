import ButtonTemplate from "./ButtonTemplate";
import React from "react";
import {getMenuNoBack} from "./MenuHandler";
import {genRandomColor} from "../logic/RandomColorGenerator";
import './ButtonTemplate.css';

class ButtonList extends React.Component{

    render() {
        const menu = getMenuNoBack();

        return(
            <div>
                <div className='menu-button-list'>
                    {menu.map(item => {
                        const randomColor = genRandomColor();
                        return(
                            <ButtonTemplate
                                key={item.id}
                                id={item.id}
                                width={item.width}
                                height={item.height}
                                svgColor={randomColor}
                                textColor={item.textColor}
                                textField={item.textField}
                                icon={item.icon}
                                iconColor={randomColor}
                                tag={item.tag}
                            />
                        )
                    })}
                </div>
                <div className='icon-svg-src'>
                    <p>
                        Do you like icons? Please check <a href='https://www.flaticon.com'>flaticon</a> and
                        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default ButtonList;