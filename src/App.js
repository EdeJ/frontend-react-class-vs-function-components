import React, { useState } from 'react';
import './App.css';

function App() {

  const [isLightOn, setIsLightOn] = useState(true);

  const handleClick = () => {
    setIsLightOn(!isLightOn);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        {isLightOn ? 'AAN' : 'UIT'}
      </button>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLightOn: true
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({
//       isLightOn: !this.state.isLightOn,
//     });
//   }

//   render() {
//     return (
//       <button
//         type="button"
//         onClick={this.handleClick}
//       >
//         {this.state.isLightOn ? 'AAN' : 'UIT'}
//       </button>
//     );
//   }
// }

// export default App;
