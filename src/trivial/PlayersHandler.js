import {replaceHtmlCharacters} from "../logic/TextHandler";

export const categories = [
    'any',
    'general',
    'books',
    'film',
    'music',
    'musical',
    'television',
    'videogame',
    'boardgame',
    'nature',
    'computer',
    'mathematics',
    'mythology',
    'sports',
    'geography',
    'history',
    'politics',
    'art',
    'celebrities',
    'animals',
    'vehicles',
    'comics',
    'gadgets',
    'anime',
    'cartoons'
];

export const difficulties = [
    'any',
    'easy',
    'medium',
    'hard'
]

export const qType = [
    'any',
    'multiple',
    'true/false'
]



const setCategoryMap = function (){
    const map = new Map();
    let number = 8;
    categories.forEach(name => {
        map.set(name, number);
        number++;
    })
    return map;
}

const getNumberByCategory = function (category){
    const map = setCategoryMap();
    return map.get(category);
}

export const getQuestions = function (number, category, difficulty, type){
    const numRequest = checkNumber(number);
    const catRequest = checkCategory(category);
    const difRequest = checkDifficulty(difficulty);
    const typeRequest = checkType(type);
    console.log('https://opentdb.com/api.php?' + numRequest + catRequest + difRequest + typeRequest);
    return fetch('https://opentdb.com/api.php?' + numRequest + catRequest + difRequest + typeRequest)
        .then(res => res.json())
        .then(result => {
            console.log("question list found");
            return result;
        })
        .catch(er => {
            console.log("there is an error")
            console.log(er);
            return 'undefined';
        })
}

export const setTotalPlayers = function (players){
    sessionStorage.setItem('trivial_total_players', players);
}

export const getTotalPlayers = function (){
    return sessionStorage.getItem('trivial_total_players');
}

export const setCommonQuestionCategory = function (type){
    sessionStorage.setItem('trivial_question_category', type);
}

export const getCommonQuestionCategory = function (){
    return sessionStorage.getItem('trivial_question_category');
}

export const savePlayerStatus = function (playerNumber, json, score, currentQuestionNumber, totalQuestions, timeLeft){
    // console.log('save: trivial_player' + playerNumber + '_timeLeft: ' + timeLeft);
    sessionStorage.setItem('trivial_player' + playerNumber + '_json', JSON.stringify(json));
    sessionStorage.setItem('trivial_player' + playerNumber + '_score', score);
    sessionStorage.setItem('trivial_player' + playerNumber + '_currentQuestionNumber', currentQuestionNumber);
    sessionStorage.setItem('trivial_player' + playerNumber + '_totalQuestions', totalQuestions);
    sessionStorage.setItem('trivial_player' + playerNumber + '_timeLeft', timeLeft);

}

export const setReadyStatus = function (value){
    sessionStorage.setItem('trivial_ready', value);
}

export const getReadyStatus = function (){
    const status = sessionStorage.getItem('trivial_ready');
    return status === 'true';
}

export const getPlayerProperty = function (playerNumber, property){
    const stored = sessionStorage.getItem('trivial_player' + playerNumber + '_' + property);
    // console.log('trivial_player' + playerNumber + '_' + property + ': ' + stored);
    if(property === 'json') return JSON.parse(stored);
    else return stored;
}

const getRandomAnswerPosition = function (arrayLength){
    return Math.floor(Math.random() * arrayLength);
}

export const getAnswers = function (playerNumber, currentQuestion){
    const answerArray = [];
    currentQuestion = currentQuestion-1;
    const result = getPlayerProperty(playerNumber, 'json').results[currentQuestion];
    const correct = replaceHtmlCharacters(result.correct_answer);
    result.incorrect_answers.forEach(answer => answerArray.push(replaceHtmlCharacters(answer)));
    answerArray.splice(getRandomAnswerPosition(answerArray.length+1), 0, correct);
    return answerArray;
}

export const getCorrectAnswer = function (playerNumber, currentQuestion){
    currentQuestion = currentQuestion-1;
    return replaceHtmlCharacters(getPlayerProperty(playerNumber, 'json').results[currentQuestion].correct_answer);
}

export const getCurrentQuestion = function (playerNumber, currentQuestionNumber){
    return replaceHtmlCharacters(getPlayerProperty(playerNumber, 'json').results[currentQuestionNumber-1].question);
}

export const setCurrentPlayer = function (player){
    sessionStorage.setItem('trivial_setup_current_player', player);
    console.log('setCurrent player to: ' + player);
}

export const getZeroScore = function (playerNumber){
    let scoreArray = [];
    for (let i = 0; i < playerNumber; i++){
        scoreArray.push(0);
    }
    return scoreArray;
}

export const getScoreAllPlayers = function (players){
    let allScores = [];
    for(let i = 1; i <= players; i++){
        allScores.push(parseInt(getPlayerProperty(i, 'score')));
    }
    return allScores;
}

export const setScore = function (player, score){
    sessionStorage.setItem('trivial_player' + player + '_score', score);
}

export const setNextQuestion = function (player, curQuestionNumber){
    curQuestionNumber++;
    sessionStorage.setItem('trivial_player' + player + '_currentQuestionNumber', curQuestionNumber);
    console.log('curQuestion set to: ' + curQuestionNumber);
}


export const getCurrentPlayer = function (){
    return sessionStorage.getItem('trivial_setup_current_player');
}

export const getNextPlayer = function () {
    let players = sessionStorage.getItem('trivial_setup_current_player');
    if (players === getTotalPlayers()) return 1;
    else {
        players++;
        return players;
    }
}


const checkNumber = function (number){
    const amount = 'amount=';
    if(number === 'max') return  amount + 50;
    if(number === 'min') return  amount + 10;
    else return amount + number;
}

const checkCategory = function (category){
    if(category === 'any') return '';
    const categoryTag = '&category='
    const categoryNum = getNumberByCategory(category);
    return categoryTag + categoryNum;
}

const checkDifficulty = function (difficulty){
    if(difficulty === 'any') return '';
    const difTag = '&difficulty=';
    return difTag + difficulty;
}
const checkType = function (type){
    const typeTag = '&type=';
    if(type === 'any') return '';
    if(type === 'true/false') return typeTag + 'boolean';
    return typeTag + type;
}