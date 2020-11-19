import React from 'react';
import './App.css';

function App() {
  const [isLightOn, toggleIsLightOn] = React.useState(true);

  function handleClick() {
    toggleIsLightOn(!isLightOn);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {isLightOn ? 'AAN' : 'UIT'}
    </button>
  );
}

export default App;
