import React, { useState } from 'react';
import './Styles.css'
const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 'Paris'
  },
  {
    id: 2,
    text: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Rhino'],
    answer: 'Blue Whale'
  },
  {
    id: 3,
    text: 'What is the smallest country in the world?',
    options: ['Vatican City', 'San Marino', 'Monaco', 'Liechtenstein'],
    answer: 'Vatican City'
  }
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelected = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert('Quiz ended! Your score is ' + score + ' out of ' + questions.length);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <p>Question {currentQuestion.id} of {questions.length}</p>
      <h2>{currentQuestion.text}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerSelected(option)}>{option}</button>
          </li>
        ))}
      </ul>
      <p>Score: {score}</p>
    </div>
  );
}

export default QuizApp;