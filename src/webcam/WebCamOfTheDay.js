import React from "react";
import WebCam from "./WebCam";
import './WebCamOfTheDay.css';
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import Arrow from "./Arrow";
import {getCamByTag, getCurrentWebCam, setAnotherWebCam} from "./WebCamHandler";
import {useNavigate, useParams} from "react-router-dom";

function WebCamOfTheDay() {

    const navigate = useNavigate();

    function changeCam(direction) {
        setAnotherWebCam(direction);
        // this.setState(getCurrentWebCam());
        navigate('/webcams/' + getCurrentWebCam().tag);
    }

    const params = useParams();

    const back = getMenuItemByTag('back');
    return(
        <div>
            <h1 className='webcam-page-title'>Web Cam Of The Day</h1>
            <WebCam webcam={getCamByTag(params.tag)}/>
            <div>
                <Arrow iconColor={back.iconColor} direction='180' changeCam={changeCam}/>
                <Arrow iconColor={back.iconColor} direction='0' changeCam={changeCam}/>
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

export default WebCamOfTheDay;