import {idPlusPlus} from "../logic/Counter";

const textColor = '#000000';
const menu = [
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#00ff5f',
        textColor: textColor,
        textField:'SITE DESIGN',
        icon: 'TOOLS',
        iconColor: '#00ff5f',
        tag: 'design'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#f2fc00',
        textColor: textColor,
        textField:'MY STORY',
        icon: 'FACE',
        iconColor: '#f2fc00',
        tag: 'story'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#ff0000',
        textColor: textColor,
        textField:'MY PROJECTS',
        icon: 'CHIP',
        iconColor: '#ff0000',
        tag: 'projects'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#00ccfd',
        textColor: textColor,
        textField:'CONTACT ME',
        icon: 'MAIL',
        iconColor: '#00ccfd',
        tag: 'contact'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#F600FF',
        textColor: textColor,
        textField:'EMULATORS',
        icon: 'EMU',
        iconColor: '#f600ff',
        tag: 'emu'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#F600FF',
        textColor: textColor,
        textField:'TRIVIAL GAME',
        icon: 'TRIVIAL',
        iconColor: '#f600ff',
        tag: 'trivial'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#F600FF',
        textColor: textColor,
        textField:'DASHBOARD',
        icon: 'DASHBOARD',
        iconColor: '#f600ff',
        tag: 'dashboard'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#FF6F00',
        textColor: textColor,
        textField:'WEB CAMS',
        icon: 'CAM',
        iconColor: '#FF6F00',
        tag: 'cam'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#ffffff',
        textColor: textColor,
        textField:'TV / RADIO',
        icon: 'TV',
        iconColor: '#ffffff',
        tag: 'tv'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#2CFFB2',
        textColor: textColor,
        textField:'NEW MOVIES',
        icon: 'SERIES',
        iconColor: '#2CFFB2',
        tag: 'platform'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#2CFFB2',
        textColor: textColor,
        textField:'WEATHER',
        icon: 'WEATHER',
        iconColor: '#2CFFB2',
        tag: 'weather'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#2CFFB2',
        textColor: textColor,
        textField:'RECIPES',
        icon: 'RECIPES',
        iconColor: '#2CFFB2',
        tag: 'recipes'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#2CFFB2',
        textColor: textColor,
        textField:'KITCHEN TOOLS',
        icon: 'KTOOLS',
        iconColor: '#2CFFB2',
        tag: 'ktools'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#2CFFB2',
        textColor: textColor,
        textField:'FART TEST',
        icon: 'FART',
        iconColor: '#2CFFB2',
        tag: 'fart'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#2CFFB2',
        textColor: textColor,
        textField:'ALWAYS ON',
        icon: 'ALWAYSON',
        iconColor: '#2CFFB2',
        tag: 'alwayson'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#2CFFB2',
        textColor: textColor,
        textField:'SCORE COUNTER',
        icon: 'SCORECOUNTER',
        iconColor: '#2CFFB2',
        tag: 'scorecounter'
    },
    {
        id: idPlusPlus(),
        width:250,
        height:55,
        svgColor:'#F600FF',
        textColor: textColor,
        textField:'GO BACK',
        icon: 'BACK',
        iconColor: '#f600ff',
        tag: 'back'
    }


];

export const getMenuItemByTag = function (tag){
        return menu.find((item) => item.tag === tag);
    }

export const getFullMenu = function (){
    return menu;
}

export const getMenuNoBack = function (){
    return menu.filter((item) => item.tag !== 'back');
}

