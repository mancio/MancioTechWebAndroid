let id = 0;

export const idPlusPlus = function (){
    id++;
    return id;
}

// return a random number between min (included) and max (excluded)
export function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}



