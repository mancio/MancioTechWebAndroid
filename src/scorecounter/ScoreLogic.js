import Asso from './cards/asso.JPG';
import Due from './cards/due.JPG';
import Tre from './cards/tre.JPG';
import Quattro from './cards/quattro.JPG';
import Cinque from './cards/cinque.JPG';
import Sei from './cards/sei.JPG';
import Sette from './cards/sette.JPG';
import Fante from './cards/fante.JPG';
import Cavallo from './cards/cavallo.JPG';
import Re from './cards/re.JPG';


export const players = ['one', 'two', 'three', 'four'];

export const saveScore = function (playerName, score){
    localStorage.setItem(playerName, score);
}

export const loadScore = function (playerName){
    return localStorage.getItem(playerName);
}

export const checkScore = function(tag){
    return loadScore(tag) || "0";
}

/*
Primera (primera)
il 7 vale 21 punti
il 6 vale 18 punti
l’Asso vale 16 punti
il 5 vale 15 punti
il 4 vale 14 punti
il 3 vale 13 punti
il 2 vale 12 punti
le figure (re, cavallo e donna) valgono 10 punti

briscola
l'asso vale 11
il 3 vale 10
il fante vale 2
il cavallo vale 3
il re vale 4
tutte le altre carte valgono 0
 */
export const cards = [
    {
        'name': 'Asso',
        'briscola': 11,
        'primera': 16,
        'pic': Asso
    },
    {
        'name': 'Due',
        'briscola': 0,
        'primera': 12,
        'pic': Due
    },
    {
        'name': 'Tre',
        'briscola': 10,
        'primera': 13,
        'pic': Tre
    },
    {
        'name': 'Quattro',
        'briscola': 0,
        'primera': 14,
        'pic': Quattro
    },
    {
        'name': 'Cinque',
        'briscola': 0,
        'primera': 15,
        'pic': Cinque
    },
    {
        'name': 'Sei',
        'briscola': 0,
        'primera': 18,
        'pic': Sei
    },
    {
        'name': 'Sette',
        'briscola': 0,
        'primera': 21,
        'pic': Sette
    },
    {
        'name': 'Fante',
        'briscola': 2,
        'primera': 10,
        'pic': Fante
    },
    {
        'name': 'Cavallo',
        'briscola': 3,
        'primera': 10,
        'pic': Cavallo
    },
    {
        'name': 'Re',
        'briscola': 4,
        'primera': 10,
        'pic': Re
    },
];

