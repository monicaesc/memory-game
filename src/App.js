import React from 'react';
import MemoryCard from './MemoryCard.js';
import './memorycard.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cards: [{face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false}             
      ]
    }
  }

  flip(i){
    let copy = this.state.cards.slice();
    copy[i].down = !copy[i].down
    this.setState({
      cards: copy
    });
  }

  render(){
    let cards = this.state.cards.map(
      (card, i)=>
      <MemoryCard
      key={i} face={card.face}
      onClick={()=>this.flip(i)}
      cardback={card.down}/>
    )

    return (
        <div className="App">
            {cards}
        </div>
      );
    }
}


export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
