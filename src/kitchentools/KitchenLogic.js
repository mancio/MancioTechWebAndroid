const ingMap = new Map();
const newIngMap = new Map();
let ingString = "";

export const getIngList = function (){
    return ingString;
}

export const addToIngList = function (text){
    ingString = ingString.concat('', text.toString());
    returnLine();
}

const returnLine = function (){
    ingString = ingString.concat('', '\n');
}

export const clearIngList = function (){
    ingString = "";
}

export const clearMap = function (){
    ingMap.clear();
    newIngMap.clear();
}

export const getResMap = function (){
    return newIngMap;
}

export const getIngValue = function (name){
    return ingMap.get(name);
}

export const getOil = function (spoon){
    return parseInt(spoon) * 13;
}

export const verifyInputs = function (input, pos){
   for(let i = 0; i<input.length; i++){
       if(i !== pos && isNaN(input[i])) return false;
   }
   return true;
}

export const setAllReadOnly = function (tag, ids){
    for (let i = 0; i<ids ;i++){
        document.getElementById(tag + i).readOnly = true;
    }
}

export const getAllIngNames = function (){
    return Array.from(ingMap.keys());
}

export const addAllIng = function (tagName, tagValue, elID){
    for (let i = 0; i<elID; i++){
        const name = String(document.getElementById(tagName + i).value);
        const value = parseInt(document.getElementById(tagValue + i).value);
        ingMap.set(name, value);
    }
}

export const checkIDs = function (ids){
    return Array.from(ingMap.keys()).length === ids;
}

export const difRatio = function (oldVal, newVal){
    return parseInt(newVal)/parseInt(oldVal);
}

export const getOldVal = function (name){
    return parseInt(ingMap.get(name));
}

export const updateAllIng = function (name, newVal){
    const ratio = difRatio(getOldVal(name), newVal);
    getAllIngNames().forEach(el => {
        newIngMap.set(el, Math.round(ingMap.get(el) * ratio));
    })
}