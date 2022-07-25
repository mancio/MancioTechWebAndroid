import './Recipes.css';
import {getRecipeList, removeTextSpace} from "./RecipesHandler";
import {useNavigate} from "react-router-dom";
import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";


export default function Recipes(){

    const back = getMenuItemByTag('back');

    const navigate = useNavigate();

    function openRecipe(title) {
        navigate('/recipe/' + removeTextSpace(title));
    }

    const list = getRecipeList();

    return(
        <div>
            <h1 className='cooking-page-title'> Ready to cook {list.length} recipes?</h1>
            <div className='recipes-list'>
                {list.map(recipe => {
                    return(
                        <table key={removeTextSpace(recipe.title)} className='table-recipe-titles'>
                            <tbody>
                                <tr>
                                    <th> <img className='cake-picture' src={recipe.picture} alt={recipe.title}/> </th>
                                    <th> <button onClick={() => openRecipe(recipe.title)} className='recipe-title-button'> {recipe.title} </button></th>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
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
                tag='menu'
            />
        </div>
    )
}