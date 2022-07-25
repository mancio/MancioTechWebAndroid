import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {addStoHttp, getParsedTvList, getTvUrlByIndex} from "./ParsingHandler";
import {useEffect, useState} from "react";
import './WatchTv.css';
import ReactPlayer from 'react-player'
import RotateDisplay from "../rotate/RotateDisplay";
import {isPortrait} from "../logic/DisplayCheck";


export default function WatchTv(){

    const [display, setDisplay] = useState(isPortrait());
    const back = getMenuItemByTag('back');
    const [tvList, setTvList] = useState([]);
    const [url,setUrl] = useState('');
    const [tvName, setTvName] = useState('');

    useEffect(() => {
        setTvList(getParsedTvList());
    },[]);

    useEffect(() => {
        function handleResize() {
            setDisplay(isPortrait());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    let id = -1;

    function changeUrl(id, name){
        setUrl(addStoHttp(getTvUrlByIndex(id)));
        setTvName(name);
    }



    if(display) return <RotateDisplay/>;

    return(
        <div className='tv-watch-page'>
            <div className='tv-note'>
                <p>
                    NOTE: Some tv channels can require VPN to be watched
                    outside your country or a plug in called "CORS" installed in your browser
                </p>
            </div>
            <div className='tv-frame'>
                <div className='channel-list'>
                    <table>
                        <tbody>
                            {tvList.map(el => {
                                id++;
                                const currentId = id;
                                const tvName = el.name;
                                return(
                                    <tr id={currentId} key={currentId}>
                                        <td>
                                            <button className='tv-name-button' onClick={() => changeUrl(currentId, tvName)}>
                                                <p>{tvName}</p>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='tv-video-frame'>
                    <ReactPlayer
                        url = {url}
                        width = '100%'
                        height = '100%'
                        controls = {true}
                        playing = {true}
                        config={{ file: {
                                attributes: {
                                    crossOrigin: 'true'
                                }}}}
                    />
                    <p>{tvName}</p>
                </div>
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
                tag='tv'
            />
        </div>
    )
}

