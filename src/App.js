
import React from 'react';
import Game from './Components/Game';
import Header from './Components/Header';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { score: 0}
  }
  

  majScore = (/** @type {number} */ param) => {
    this.setState({ score: this.state.score + param})
  }
  
  
  render() { 
    return ( 
      <div id='general' className="container-fluid">
        <Header 
          score = {this.state.score}
        />
        <Game 
          majScore = {this.majScore}
        />
      </div>
     );
  }
}
 
export default App;