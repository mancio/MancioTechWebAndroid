import {useParams} from "react-router-dom";
import {
    areaCircle, areaRectangle, getNewQuantityText,
    getRecipeByTitle,
    getRecipeDescKeys,
    getRecipeIngredientKeys, ingToFloat,
    isACircleCake, isPasta, isPiadina, isRectangularCake,
    replaceTextSpace
} from "./RecipesHandler";
import ButtonTemplate from "../menu/ButtonTemplate";
import React, {useRef, useState} from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";
import './SingleRecipe.css';

export default function SingleRecipe(){

    const back = getMenuItemByTag('back');

    const params = useParams();
    const recipe = getRecipeByTitle(replaceTextSpace(params.tag));
    const title = recipe.title;
    const ingredients = recipe.ingredients;
    const description = recipe.description;
    const notes = recipe.notes;
    const picture = recipe.picture;
    const shape = recipe.shape;
    const portions = recipe.portions;

    const [original, setOriginal] = useState(true);
    const [change, setChange] = useState(false);

    const diaRef = useRef();
    const wRef = useRef();
    const hRef = useRef();

    let counter = 1;

    function changeIngSize(){
        if(checkFields()){
            setOriginal(false);
            setChange(true);
            setTimeout(() => {
                setChange(false)
            },500);
        }else window.alert("Please set a readable size");
    }

    function checkFields(){
        if(isACircleCake(shape)){
            if(diaRef.current.value === '' || diaRef.current.value === '0') return false;
        }else if (isRectangularCake(shape)) {
            if ((wRef.current.value === '' || wRef.current.value === '0')
                && (hRef.current.value === '' || hRef.current.value === '0')) return false;
        }
        return true;
    }

    function getIngredient(key){
        if(original) return ingredients[key];
        // span required otherwise page crash if change after language translation
        else if(change) return <span>&nbsp; Loading 😋 &nbsp;</span>;
        else {
            let oldArea = 0;
            let newArea = 0;
            if(isACircleCake(shape)){
                oldArea = areaCircle(ingToFloat(recipe.diameter));
                newArea = areaCircle(ingToFloat(diaRef.current.value));
            }
            if(isRectangularCake(shape)){
                oldArea = areaRectangle(ingToFloat(recipe.width), ingToFloat(recipe.height));
                newArea = areaRectangle(ingToFloat(wRef.current.value), ingToFloat(hRef.current.value))
            }
            return getNewQuantityText(newArea, oldArea, ingredients[key]);
        }
    }

    return(
        <div>
            <div className='recipe-panel'>
                <h1>{title}</h1>
                <img src={picture} alt={title}/>
                <table className='ingredients-table'>
                    <tbody>
                        {getRecipeIngredientKeys(ingredients).map((key) => {
                            const ingNum = 'ing'+ counter++;
                            return(
                                <tr key={ingNum} id={ingNum}>
                                    <td>{key}</td>
                                    <td>{getIngredient(key)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='cake-diameter-part'>
                    {isACircleCake(shape) &&
                        <>
                            <p> Change cake Diameter (cm) </p>
                            <input ref={diaRef} type='number' step='1' min='10' max='60' defaultValue={ingToFloat(recipe.diameter)}/>
                            <button onClick={changeIngSize} className='button-change-ingredients'> UPDATE </button>
                        </>
                    }
                    {isRectangularCake(shape) &&
                        <>
                            <p> Change cake dimensions (cm) </p>
                            <p> width <input ref={wRef} type='number' step='1' min='10' max='60' defaultValue={ingToFloat(recipe.width)}/></p>
                            <p> height <input ref={hRef} type='number' step='1' min='10' max='60' defaultValue={ingToFloat(recipe.height)}/></p>
                            <button onClick={changeIngSize} className='button-change-ingredients'> UPDATE </button>
                        </>
                    }
                    {isPasta(shape) &&
                        <>
                            <p> Ricetta per {portions} persone </p>
                        </>
                    }
                    {isPiadina(shape) &&
                        <>
                            <p> Ricetta per {portions} piadine </p>
                        </>
                    }
                    <p id='cake-diameter-part-note'> note: page will crash if translated before changing ingredients </p>
                </div>
                <div className='recipe-desc-part'>
                    <ol>
                        {getRecipeDescKeys(description).map(key => {
                            return(
                                <li key={key} id={key}> {description[key]} </li>
                            )
                        })}
                    </ol>
                </div>
                <div className='recipe-note-part'>
                    <h3> NOTE: </h3>
                    <p> {notes} </p>
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
                tag='recipes'
            />
        </div>
    )
}