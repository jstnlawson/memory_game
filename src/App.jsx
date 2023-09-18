
import React, {useState} from 'react';
import './App.css';



function App() {

  const [isRedClicked, setIsRedClicked] = useState(false);
  const [isBlueClicked, setIsBlueClicked] = useState(false);
  const [isGreenClicked, setIsGreenClicked] = useState(false);
  const [isYellowClicked, setIsYellowClicked] = useState(false);

  const redButtonClick = () => {
    setIsRedClicked(!isRedClicked); 
    setTimeout(() => {
      setIsRedClicked(false);
    }, 250);
  };

  const blueButtonClick = () => {
    setIsBlueClicked(!isBlueClicked); 
    setTimeout(() => {
      setIsBlueClicked(false);
    }, 250);
  };

  const greenButtonClick = () => {
    setIsGreenClicked(!isGreenClicked); 
    setTimeout(() => {
      setIsGreenClicked(false);
    }, 250);
  };

  const yellowButtonClick = () => {
    setIsYellowClicked(!isYellowClicked); 
    setTimeout(() => {
      setIsYellowClicked(false);
    }, 250);
  };

  return (
    <div className="App">
      <button 
      className={`red-button ${isRedClicked ? 'active' : ''}`} 
      onClick={redButtonClick}>
      </button>
      <button 
      className={`blue-button ${isBlueClicked ? 'active' : ''}`} 
      onClick={blueButtonClick}>
      </button>
      <button 
      className={`green-button ${isGreenClicked ? 'active' : ''}`} 
      onClick={greenButtonClick}>
      </button>
      <button 
      className={`yellow-button ${isYellowClicked ? 'active' : ''}`} 
      onClick={yellowButtonClick}>
      </button>
    </div>
  );
}

export default App;
