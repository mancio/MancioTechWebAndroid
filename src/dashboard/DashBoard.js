import ButtonTemplate from "../menu/ButtonTemplate";
import React, {useEffect, useRef} from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import DashIcon from "./DashIcon.svg";
import './DashBoard.css'
import {getText, saveText} from "./DashLogic";
import {saveToTextFile} from "../logic/TextHandler";

export default function DashBoard(){

    const backButton = getMenuItemByTag('back');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.value = getText();
    },[])

    function saveChanges(){
        saveText(inputRef.current.value);
    }

    function exportTXT(){
        saveToTextFile(inputRef.current.value, "mynotes.txt");
    }

    function clearDash(){
        inputRef.current.value = "";
        saveChanges();
    }


    return(
        <div>
            <div className='dash-intro'>
                <h3>Here you can write your notes</h3>
                <h4>Text is automatically saved in browser session</h4>
            </div>
            <div className='dashboard' style={{ backgroundImage: `url(${DashIcon})` }}>
                <textarea onChange={saveChanges} ref={inputRef} value={inputRef.current}/>
            </div>
            <div className='dash-buttons'>
                <button onClick={exportTXT}>Export to TXT</button>
                <button onClick={clearDash}>Clear Dashboard</button>
            </div>
            <div className='dash-note'>
                <p>Please don't save any password in the dashboard. The text is saved in cookies and can be hacked</p>
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