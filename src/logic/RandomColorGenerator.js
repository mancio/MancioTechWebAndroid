const colors = [
    '#ff0000',
    '#0066ff',
    '#6de804',
    '#ff6699',
    '#ff0066',
    '#cccc00',
    '#7e08db',
    '#04e8c6',
    '#e85404',
    '#bd6aea',
    '#d1a000',
    '#eeff00'
];

export const genRandomColor = function (){
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

