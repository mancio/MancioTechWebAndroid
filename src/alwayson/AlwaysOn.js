import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import './AlwaysOn.css';
import {getRandEmoticons} from "./AlwaysOnHandler";
import Ps1Code from "./Ps1Code";
import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {copyTextToClipBoard} from "../logic/TextHandler";
import {useNavigate} from "react-router-dom";

export default function AlwaysOn(){

    const navigate = useNavigate();
    const path = window.location.pathname;
    const host = window.location.hostname;

    const backButton = getMenuItemByTag('back');

    const [visible, setVisible] = useState(true);
    const [hide, setHide] = useState(false);
    const [button, setButton] = useState('Hide Text!');
    const [play, setPlay] = useState(false);
    const [script, setScript] = useState(false);

    useEffect(()=>{
        if(path === '/ps1') {
            setScript(true);
            setPlay(false);
        }else {
            setVisible(true);
            setHide(false);
            setButton('Hide Text!');
            setPlay(false);
            setScript(false);
        }
    },[path]);

    function minimize(){
        if (hide) {
            setHide(false);
            setButton('Hide Text!');
        }else{
            setHide(true);
            setPlay(true);
            setButton('Back');
        }
    }

    function run(){
        /*
            Is not doing anything special. Due to a browser bug the user must
            click somewhere to start the video.
         */
        setPlay(true);
        setVisible(false);
    }

    function getScript(){
        // setScript(true);
        navigate('/ps1');
    }

    function copyLink(){
        copyTextToClipBoard(host + '/ps1').then(()=>window.alert("Link copied! Now you can share to your friends :)"));
    }

    useEffect(()=>{
        if(visible) setTimeout(()=>{ setVisible(false)},10000);
        else setTimeout(()=>{ setVisible(true)},500);
        return () => clearTimeout();
    },[visible]);

    return(
        <div className='always-on'>
            {!play && !script && <button onClick={run} className='click-always-on'>Click to start!</button>}
            {play && <button className='hide-text-always-on' onClick={minimize}>{button}</button>}
            {!hide && play &&
                <>
                    <p>Keep this page open to keep the display always on</p>
                    <p>If the world turn your device will not fall asleep</p>
                </>
            }
            {visible && play &&
                <div className={!hide ? 'player-wrapper-always-on': 'player-wrapper-always-on-small'}>
                    <ReactPlayer
                        className='react-player-always-on'
                        url='https://fourlenses.com/wp-content/uploads/2022/01/file_example_MP4_480_1_5MG.mp4?_=1'
                        width='100%'
                        height='100%'
                        playing={true}
                        loop={true}
                        controls={false}
                        pip={false}
                    />
                </div>
            }
            {!visible && play &&
                <div className='alwayson-emoti'>
                    <p>{getRandEmoticons()}</p>
                </div>
            }
            {play && !hide &&
                <div>
                    <p>Not working? <a href={() => false} className='script-link' onClick={()=>getScript()}>Try this solution</a></p>
                </div>
            }
            {script &&
                <div className='always-on-code-part'>
                    <p><img
                        className='powershell-ico'
                        src='https://gist.githubusercontent.com/Xainey/d5bde7d01dcbac51ac951810e94313aa/raw/6c858c46726541b48ddaaebab29c41c07a196394/PowerShell.svg'
                        alt="PowerShell Logo"
                    /> Windows 7 - 11 solution
                    </p>
                    <p>Copy the script in a text file and save as .ps1 then execute it from Powershell</p>
                    <Ps1Code/>
                    <p>Send to your friend <a href={() => false} className='script-link' onClick={()=>copyLink()}>mancioman.fun/ps1</a></p>
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
            }
        </div>
    )
}