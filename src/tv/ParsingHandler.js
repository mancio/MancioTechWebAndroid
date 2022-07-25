import parser from 'iptv-playlist-parser'

export const getTextFromLink = async function (link) {
    const res = await fetch(link);
    const body = await res.text();
    if(body !== undefined) return body;
    return 'error';

}

export const setParsedTvList = async function (link) {
    const playlist = await getTextFromLink(link);
    const jsonTvListItemsAsString = JSON.stringify(parser.parse(playlist).items);
    localStorage.setItem('tvListItems',jsonTvListItemsAsString);
}

let fileReader;

const handleFileRead = function (){
    const playlist = fileReader.result;
    const parsedList = parser.parse(playlist).items;
    console.log(parsedList);
    const jsonTvList = JSON.stringify(parsedList);
    localStorage.setItem('tvListItems', jsonTvList);
}

export const setParsedFileTvList = async function (file){
    fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onloadend = handleFileRead;
}

export const getParsedTvList = function (){
    const list = JSON.parse(localStorage.getItem('tvListItems'));
    console.log(list);
    return list;
}

export const getTvUrlByIndex = function (id){
    const list = JSON.parse(localStorage.getItem('tvListItems'));
    return list[id].url;
}

export const addStoHttp = function (url){
    if (url.indexOf("https://") === 0){
        return url;
    }else {
        return "https" + url.substring(4);
    }
}