import {isMobile} from "react-device-detect";

export const isSmall = function (){
    return window.screen.width < 400;
}

export const isLandscape = function (){
    console.log(window.screen.orientation.angle);
    return window.screen.orientation.angle === 90 && isMobile;
}

export const isPortrait = function (){
    console.log(window.screen.orientation.angle);
    return window.screen.orientation.angle === 0 && isMobile;
}