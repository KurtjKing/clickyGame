import React, { Component } from 'react';
import Card from "./components/Card";
import chars from "./cards.json";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import './App.css';


class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    chars,
    clickedChars: [],
    score: 0,
    topScore:0,
    guessRight:undefined,
    winner:false
    
  };

  

  shuffleScoreCard = id => {
  
    chars.sort(() => Math.random() - 0.5);

    this.setState({ chars, score:   this.state.score +1 });



    



      

    

  };

  

  
  

  


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Car Clicker</h1>
        <p className="App-intro">
          Try not to click the same image twice!
        </p>
      </header>
      <Score total={this.state.score}
             topScore={this.state.topScore}
             status={this.state.status}
             />
      <Wrapper>
        {this.state.chars.map(data => (
          <Card
            shuffleScoreCard={this.shuffleScoreCard}
            id={data.id}
            key={data.id}
            image={data.image}
          />
        ))}
      </Wrapper>
    
  </div>
  );
}
}

export default App;
