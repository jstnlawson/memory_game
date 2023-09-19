
import React, { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [pattern, setPattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isComputerTurn, setIsComputerTurn] = useState(true);


  const buttonColors = ['red', 'blue', 'green', 'yellow'];

  // Generate a random pattern and display it
  // ...pattern is creating the array that holds the pattern as it's made
  const generatePattern = () => {
    const newPattern = [...pattern];
    const randomColor = buttonColors[Math.floor(Math.random() * 4)];
    newPattern.push(randomColor);
    setPattern(newPattern);
  };

  // Handle button clicks during the game
  const handleButtonClick = (color) => {
    console.log('isComputerTurn:', isComputerTurn);
    console.log('userPattern:', userPattern);



    if (!isPlaying || isComputerTurn) return;
    const newUserPattern = [...userPattern, color];
    setUserPattern(newUserPattern);

    if (newUserPattern[currentStep] !== pattern[currentStep]) {
      // User made a mistake
      endGame();
      return;
    }

    if (newUserPattern.length === pattern.length) {
      // User completed the current sequence
      setTimeout(() => {
        setUserPattern([]);
        setCurrentStep(0);
        setIsComputerTurn(true);
        generatePattern();
      }, 500);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  // Start the game
  const startGame = () => {
    setPattern([]);
    setUserPattern([]);
    setCurrentStep(0);
    setIsPlaying(true);
    setIsComputerTurn(true);
    generatePattern();
    // playComputerTurn();
  };

  // End the game
  const endGame = () => {
    setIsPlaying(false);
    alert('Game Over! Your score: ' + (pattern.length - 1));
  };

  //something is screwed up with the dependences here
  //that is propbably causing the clicks to no longer show up
  useEffect(() => {
    const delay = 1000; // Delay between computer's button clicks in milliseconds

    if (isPlaying && isComputerTurn) {
      setIsComputerTurn(true);

      const timer = setInterval(() => {
        // handleButtonClick(pattern[currentStep]);
        const computerColor = pattern[currentStep]; // Get the color the computer is clicking
        console.log('Computer clicked:', computerColor); // Log the computer's click

        handleButtonClick(computerColor);


        if (currentStep + 1 < pattern.length) {
          setCurrentStep(currentStep + 1);
        } else {
          setCurrentStep(0);
          setIsComputerTurn(false); // Switch to the user's turn
          clearInterval(timer); // Stop the timer when the computer's turn is done
        }
      }, delay);

      return () => {
        clearInterval(timer); // Cleanup the timer when the component unmounts or when isComputerTurn becomes false
      };
    }
  }, [currentStep, isPlaying, pattern, isComputerTurn]);


  return (
    <div className="App">

      <div>
        {buttonColors.map((color) => (
      <button
        key={color}
        className={`${color}-button ${userPattern.includes(color) ? 'active' : ''}`}
        onClick={() => handleButtonClick(color)}
      ></button>
    ))}

        {isPlaying && (
          <div className="turn-status">
            {isComputerTurn ? "Computer Turn" : "User Turn"}
          </div>
        )}
      </div>
      <button onClick={startGame}>Start</button>
    </div>

  );
}

export default App;
