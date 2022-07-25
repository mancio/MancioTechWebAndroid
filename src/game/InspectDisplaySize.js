const width = 834;
const height = 754;

export const displayTooSmall = function (){
    // true is too small, false is ok
    return (window.innerWidth < width || window.innerHeight < height);
}