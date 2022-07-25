import React from "react";
import {getOil, verifyInputs} from "./KitchenLogic";
import "./Ktools.css";

export function Hydration(){

    function findElements(pos){

        let flour = parseInt(document.getElementById('hy-flour').value); // pos 0
        let water = parseInt(document.getElementById('hy-water').value); // pos 1
        let hydration = parseInt(document.getElementById('hydration').value); // pos 2

        let yeast = parseInt(document.getElementById('hy-yeast').value);
        let oil = parseInt(document.getElementById('hy-oil').value);

        const input = [flour, water, hydration];

        /*
            formula:
            flour = water / hydration * 100
            water = flour * hydration / 100
            hydration = water / flour * 100
         */


        if(verifyInputs(input, pos)){
            const liquid = water + getOil(oil);
            const solid = flour + yeast;
            let quantity = 0;
            if(pos === 0){
                quantity = parseInt(Math.round(liquid / hydration * 100) - yeast);
                document.getElementById('hy-flour').value = quantity;
            }
            if(pos === 1){
                quantity = parseInt(Math.round(solid * hydration / 100) - getOil(oil));
                document.getElementById('hy-water').value = quantity;
            }
            if(pos === 2){
                quantity = parseInt(Math.round(liquid / solid * 100));
                document.getElementById('hydration').value = quantity;
            }

        } else window.alert("Please check inputs");

    }

    return(
        <div className='hydration-calc'>
            <h1>Hydration calculator</h1>
            <p>
                You can get quantity of flour, water or dough hydration level having 2 of these variables.<br/>
                Yest and oil quantity are required for the calculation and cannot be deduced. Input zero if missing.<br/>
                Remember 1 ml = 1 gr of water.
            </p>
            <div className='hy-calc-input-part'>
                <p>
                    Flour gr 🌾 : <span><input className='hy-calc-input' type="number" name="flour" id='hy-flour' min='1' defaultValue='100'/></span>
                    <span><button onClick={() => findElements(0)} className='cooking-tools-button'>FIND</button></span>
                </p>
                <p>
                    Rye/yeast 🦠 gr: <span><input className='hy-calc-input' type="number" name="yeast" id='hy-yeast' min='0' defaultValue='0'/></span>
                </p>
                <p>
                    Water 💧 gr/ml: <span><input className='hy-calc-input' type="number" name="water" id='hy-water' min='1' defaultValue='60'/></span>
                    <span><button onClick={() => findElements(1)} className='cooking-tools-button'>FIND</button></span>
                </p>
                <p>
                    Oil tablespoon 🍈: <span><input className='hy-calc-input' type="number" name="oil" id='hy-oil' min='0' defaultValue='0'/></span>
                    <span>(1 tablespoon = 13 gr)</span>
                </p>
                <p>
                    hydration %: <span><input className='hy-calc-input' type="number" name="hydration" id='hydration' min='1' defaultValue='60'/></span>
                    <span><button onClick={() => findElements(2)} className='cooking-tools-button'>FIND</button></span>
                </p>
            </div>
        </div>
    )
}