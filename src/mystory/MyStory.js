import React from "react";
import './MyStory.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";

class MyStory extends React.Component {

    render() {
        const back = getMenuItemByTag('back');
        console.log(back);
        return (
            <div>
                <div className='box'>
                    <h1>Welcome to my Story!</h1>
                    <p>
                        Born curious I have always like to learn how stuff works.
                        I love whatever I can put hand on it.
                    </p>
                    <ul className='hobby-list'>
                        <li>Computer</li>
                        <li>Electronics</li>
                        <li>Graphic design</li>
                        <li>Mechanics</li>
                        <li>Cooking</li>
                    </ul>
                    <p>
                        Now I'm interested in ReactJS and Python. I made this web site to learn React better
                        and develop a microservice application where the frontend (React) get information from
                        services written in Python. Actually my idea is to provide services like weather, cooking recipes
                        ecc...
                    </p>
                </div>
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
}

export default MyStory;