import {
    getAnswers,
    getCommonQuestionCategory, getCorrectAnswer, getCurrentQuestion, getNextPlayer,
    getPlayerProperty, getScoreAllPlayers,
    getTotalPlayers, getZeroScore, setCurrentPlayer,
    setNextQuestion, setScore
} from "./PlayersHandler";
import './Play.css'
import React from "react";
import {useEffect, useState} from "react";

export default function Play({page}){

    const totalPlayers = getTotalPlayers();
    const questionType = getCommonQuestionCategory();

    const totTime = getPlayerProperty(1, 'timeLeft');

    const [firstSetUp, setFirstSetUp] = useState(true);

    const [seconds, setSeconds] = useState(totTime);

    const [timeEnd, setTimeEnd] = useState(false);

    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [click, setClick] = useState(true);

    const [state, setState] = useState(
        {
            currentPlayer: 1,
            currentScore: 0,
            scorePlayers: [],
            currentQuestionNumber: 1,
            currentQuestion: "loading",
            answerArray: [],
            correctAnswer: "",
            questionsLeft: "loading",
        }
    )




    useEffect(() => {
        if(firstSetUp){
            setCurrentPlayer(1);
            setNextQuestion(1, 1);
            const question = getCurrentQuestion(1,1);
            const totQ = getPlayerProperty(1, 'totalQuestions');
            const time = getPlayerProperty(1, 'timeLeft');
            const answers = getAnswers(1, 1);
            const correctAns = getCorrectAnswer(1, 1);
            const zeroScore = getZeroScore(totalPlayers);
            setState({
                currentPlayer: 1,
                currentScore: 0,
                scorePlayers: zeroScore,
                currentQuestionNumber: 1,
                currentQuestion: question,
                answerArray: answers,
                correctAnswer: correctAns,
                questionsLeft: totQ-1,
            })

            setSeconds(time);
        }

        setFirstSetUp(false);

        if(!timeEnd) {
            if(seconds <= 0) {
                setTimeEnd(true);
                setClick(false);
                setSeconds(0);
            }else {
                setTimeout(() => {
                    setSeconds(seconds - 1);
                }, 1000);
            }
        }
    },[firstSetUp, seconds, timeEnd, totalPlayers])

    function checkAnswer(answer) {
        setTimeEnd(true);
        const curAnswer = getCorrectAnswer(state.currentPlayer, state.currentQuestionNumber);
        if(answer === curAnswer){
            let newScore = state.currentScore;
            newScore++;
            setScore(state.currentPlayer, newScore);
            setCorrect(true);
        }else {
            setWrong(true);
        }
        setClick(false);
    }

    function switchPlayer(){
        if(parseInt(state.currentPlayer) === parseInt(totalPlayers) && parseInt(state.questionsLeft) === 0){
            setTimeout(() => {
                page('Winner');
            },1000)
        }else {
            const nextPlayer = getNextPlayer();
            const score = getPlayerProperty(nextPlayer, 'score');
            const scoreAllPlayers = getScoreAllPlayers(totalPlayers);
            let currentQuestionNumber = getPlayerProperty(nextPlayer, 'currentQuestionNumber');
            console.log('reading question number: ' + currentQuestionNumber);
            const currentQuestion = getCurrentQuestion(nextPlayer, currentQuestionNumber);
            const totalQuestions = getPlayerProperty(nextPlayer, 'totalQuestions');
            const time = getPlayerProperty(nextPlayer, 'timeLeft');
            const correctAns = getCorrectAnswer(nextPlayer, currentQuestionNumber);
            const answers = getAnswers(nextPlayer, currentQuestionNumber);

            setSeconds(time);
            setTimeEnd(false);
            setNextQuestion(nextPlayer, currentQuestionNumber);
            setCurrentPlayer(nextPlayer);
            setCorrect(false);
            setWrong(false);
            setClick(true);

            const qLeftNow = totalQuestions - currentQuestionNumber;

            setState(
                {
                    currentPlayer: nextPlayer,
                    currentScore: score,
                    scorePlayers: scoreAllPlayers,
                    currentQuestionNumber: currentQuestionNumber,
                    currentQuestion: currentQuestion,
                    answerArray: answers,
                    correctAnswer: correctAns,
                    questionsLeft: qLeftNow
                }
            );
        }
    }

    let plCounter = 0;

    return(
        <div>
            <div className='trivial-play-box'>
                <h1 className='trivial-play-title'> Let's Play! </h1>
                <p> Players in the game: {totalPlayers} </p>
                <p className='question-type'>
                    <span className='question-type-tag'> Question type: {questionType} </span>
                </p>
                <div className='play-player-list'>
                    { state.scorePlayers.map(score => {
                        plCounter++;
                        return(
                            <p key={plCounter}>
                                <span className='player-tag'> Player {plCounter}: {score} </span>
                            </p>
                        )
                    })}
                </div>
                <p> Now player {state.currentPlayer} answer question {state.currentQuestionNumber}</p>
                <p className='current-question'> {state.currentQuestion} </p>

                <p> Possible answers: </p>

                <div>
                    {   state.answerArray.map(answer => {
                                return (<button className='answer-button' onClick={click ? (() => checkAnswer(answer)) : null} key={answer}>{answer}</button>);
                            })
                    }
                </div>
                { (correct) && <p> Correct! </p>}
                {
                    (wrong) && <>
                        <p> Wrong! </p>
                        <p> Correct answer is: {state.correctAnswer}</p>
                    </>
                }
                <p> Time Left: {seconds} </p>
                <p> Questions left: {state.questionsLeft} </p>
                {
                    (timeEnd) && (
                        <div>
                            <p> Time Expired! </p>
                            <button className='trivial-continue-button' onClick={switchPlayer}> Continue </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}