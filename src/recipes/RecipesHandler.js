import {getRecipesData} from "./RecipeList";

const recipes = getRecipesData();

export const getRecipeList = function (){
    return recipes.results;
}

export const removeTextSpace = function (text){
    return text.replace(/ /g, '_');
}

export const replaceTextSpace = function (text){
    return text.replace(/_/g, ' ');
}

export const getRecipeByTitle = function (title){
    return recipes.results.find((recipe) => recipe.title === title);
}

export const getRecipeIngredientKeys = function (ingredients){
    return Object.keys(ingredients);
}

export const getRecipeDescKeys = function (description){
    return Object.keys(description);
}

export const isACircleCake = function (shape){
    return shape === 'circle';
}

export const isRectangularCake = function (shape){
    return shape === 'rectangle' || shape === 'rectangular';
}

export const isPasta = function (shape){
    return shape === 'pasta';
}

export const isPiadina = function (shape){
    return shape === 'piadina';
}

export const areaCircle = function (diameter){
    const r = diameter/2;
    return r * r * Math.PI;
}

export const areaRectangle = function (width, height){
    return width * height;
}

const multiplyFactor = function (area1, area2){
    if(area1 > area2) return area1/area2;
    else if (area1 === area2) return 1;
    else return area2/area1;
}

export const getNewQuantityText = function (newArea, oldArea, textIng){
    const factor = multiplyFactor(newArea, oldArea);
    console.log('new: ' + newArea + ', old: ' + oldArea + ', fact: ' + factor);
    let op;
    const quantity = ingToFloat(textIng);
    if(newArea >= oldArea) op = roundToInt(quantity * factor);
    else op = roundToInt(quantity / factor);
    return op + ingOnlyText(textIng);
}

const roundToInt = function (num){
    return Math.round(num);
}

export const ingToFloat = function (textIng){
    const numIng = textIng.replace(/\D/g,'');
    return parseFloat(numIng);
}

const ingOnlyText = function (textIng){
    return textIng.replace(/[0-9]/g, '');
}