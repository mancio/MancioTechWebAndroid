// inspired by http://jsfart.com

const farts = {
	Toot : 'fart1',
	Ripper : 'fart2',
	Plop : 'fart3',
	Squit : 'fart4',
	Raspberry : 'fart5',
	Squat : 'fart6',
	Tuppence : 'fart7',
	Liftoff : 'fart8',
	Trumpet : 'fart9',
	Fizzler : 'fart10',
	Windy : 'fart11',
	Eine : 'fart12',
	Fartception: 'fart13',
	Fartpoint1: 'fart14'
};

const valuesOfFarts = Object.values(farts);

const namesOfFarts = Object.keys(farts);

export const getNamesOfFarts = function (){
	return namesOfFarts;
}

const getFartNameFromIndex = function (index){
	return namesOfFarts[index];
}

const getIndexFromFartName = function (name){
	return namesOfFarts.indexOf(name);
}

const playFart = function (index){
	const audio = new Audio('https://raw.githubusercontent.com/74656c/fart.js/master/farts/'+ valuesOfFarts[index] + '.mp3');
	audio.play().then(r => console.log("I'm farting!: " + getFartNameFromIndex(index)))
		.catch(r => console.log(r));
}

const getRandomIndex = function (){
	return Math.floor(Math.random() * valuesOfFarts.length);
}

export const playRandomFart = function (){
	playFart(getRandomIndex());
}

export const playArmageddonFart = async function () {
	const timer = ms => new Promise(res => setTimeout(res, ms))
	for (let i = 0; i <= 50; i++) {
		playFart(getRandomIndex());
		await timer(500);
	}
}

export const playSingleFart = function (name){
	const index = getIndexFromFartName(name);
	playFart(index);
}

export const askToStop = function (){
	window.alert('ehehh you wish.....');
}