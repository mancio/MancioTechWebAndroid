import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { rust } from "@codemirror/lang-rust";
import './Ps1Code.css'
import {copyTextToClipBoard, newLine, saveToTextFile, tab} from "../logic/TextHandler";

export default function Ps1Code() {

    const code = '$wsh = New-Object -ComObject WScript.Shell' + newLine() +
    'while (1) {' + newLine() + tab() + '$wsh.SendKeys("{CAPSLOCK}")' + newLine() + tab() +
    'Start-Sleep -seconds 30' + newLine() + '}'

    function copyToClip(){
        copyTextToClipBoard(code).then(() => window.alert("Copied!"));
    }

    function saveToFile(){
        saveToTextFile(code, "press.ps1");
    }

    return (
        <div>
            <div className='code-tab'>
                <CodeMirror
                    value={code}
                    height="150px"
                    theme="dark"
                    readOnly="true"
                    extensions={[rust({ jsx: true })]}
                />
            </div>
            <button className='click-ps1-copy-code' onClick={() => copyToClip()}>Copy to clipboard</button>
            <button className='click-ps1-copy-code' onClick={() => saveToFile()}>Download file</button>
        </div>
    );
}