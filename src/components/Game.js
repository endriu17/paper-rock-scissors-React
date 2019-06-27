import React, { Component } from 'react';
import '../App.css';
import ResultBar from './ResultBar';
import GameLog from './GameLog';
import Buttons from './Buttons';
import Message from './Message';
import StartInput from './StartInput';
import RoundResult from './RoundResult';
import PlayerWinner from './PlayerWinner';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rounds: 0,
      playerWin: 0,
      compWin: 0,
      queue: 0,
      compChoice: '',
      playerChoice: '',
      score: '',
      input: false,
      playLog: [],
      display: false,
      play: false,
      choose: false,
      chooseButton: '',
      chooseComp: '',
      result: '',
      dbround: 0
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.playGame = this.playGame.bind(this);
    this.valueEnter = this.valueEnter.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  clickHandler(e) {
    this.setState({
      rounds: this.state.value,
      message: '',
      input: true,
      play: true
    });
  }

  resetGame() {
    this.setState({
      value: '',
      rounds: 0,
      playerWin: 0,
      compWin: 0,
      queue: 0,
      compChoice: '',
      playerChoice: '',
      score: '',
      input: false,
      playLog: [],
      display: false,
      play: false,
      choose: false,
      chooseButton: '',
      chooseComp: '',
      result: ''
    });
  }

  valueEnter(e) {
    let value = e.target.value;
    if (e.key === 'Enter' && !isNaN(value) && value > 0) {
      this.setState({
        value: value,
        message: '',
        display: true
      });
    } else if (this.state.display === true && value > 0) {
      this.setState({ message: '' });
    } else {
      this.setState({ message: 'Enter a number greater than zero!' });
    }
  }

  changeHandler(event) {
    let value = event.target.value;
    if (!isNaN(value) || value === null) {
      this.setState({
        value: value,
        message: ''
      });
    } else if (this.state.display === true && this.state.rounds > 0) {
      this.setState({ message: '' });
    } else {
      this.setState({ message: 'Enter a number greater than zero!' });
    }
  }

  playGame(id) {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    this.setState({ message: 'Enter a number greater than zero!' });
    let choices = ['', 'rock', 'paper', 'scissors'];
    let comp = choices[randomChoice];
    this.setState({
      choose: true,
      chooseButton: 'You: ' + id
    });
    function scored() {
      if (comp === id) {
        return 'Tie';
      } else if (
        (comp === 'rock' && id === 'paper') ||
        (comp === 'paper' && id === 'scissors') ||
        (comp === 'scissors' && id === 'rock')
      ) {
        return 'You';
      } else {
        return 'Computer';
      }
    }
    const score = scored();
      this.setState({
        chooseButton: '',
        chooseComp: 'Computer: ' + comp,
        chooseComp: '',
        result: score
      });
    setTimeout(() => {
      this.setState({
        choose: false,
        result: ''
      });
    }, 3000);
    function winner() {
      if (score === 'You') {
        return 1;
      } else if (score === 'Computer') {
        return 2;
      } else {
        return 0;
      }
    }
    const winners = winner();

    this.setState(prevState => {
      return {
        playLog: [
          ...prevState.playLog,
          {
            You: id,
            Computer: comp,
            Result: score
          }
        ],
        message: '',
        compChoice: comp,
        playerChoice: id,
        score: score + ' WON!',
        rounds: this.state.rounds - 1,
        queue: this.state.queue + 1,
        playerWin:
          winners === 1 ? this.state.playerWin + 1 : this.state.playerWin,
        compWin: winners === 2 ? this.state.compWin + 1 : this.state.compWin
      };
    });
  }

  render() {
    let player = this.state.playerWin;
    let compw = this.state.compWin;
    let value = this.state.value;
    let rounds = this.state.rounds;
    let queue = this.state.queue;
    function gameWiner() {
      if (player >= value && player > compw && queue >= rounds) {
        return 'You WON!!!';
      } else if (compw >= value && compw > player && queue >= rounds) {
        return 'Computer WON!!!';
      }
    }
    const winner = gameWiner();
    console.log(this.state);
    return (
      <div>
        <PlayerWinner
          choose={this.state.choose}
          score={this.state.score}
          result={this.state.result}
          player={this.state.playerChoice}
          comp={this.state.compChoice}
        />
        <div
          className="game fade-in"
          style={{
            display: !this.state.choose ? 'flex' : 'none'
          }}>
          <h1
            className="game-header"
            style={{
              display: !this.state.display ? 'block' : 'none'
            }}>
            Paper, rock, scissors...
          </h1>
          <StartInput
            value={this.state.value}
            changeHandler={this.changeHandler}
            valueEnter={this.valueEnter}
            input={this.state.input}
            display={this.state.display}
            play={this.state.play}
            clickHandler={this.clickHandler}
          />
          <Message
            message={this.state.message}
            display={this.state.display}
            play={this.state.play}
            value={this.state.value}
          />
          <Buttons
            play={this.state.play}
            winner={winner}
            playGame={this.playGame}
          />
          <ResultBar
            playerWin={this.state.playerWin}
            compWin={this.state.compWin}
            queue={this.state.queue}
            winner={winner}
          />
          <h1 className="game-winner">{winner}</h1>
          <GameLog
            winner={winner}
            playLog={this.state.playLog}
            resetGame={this.resetGame}
          />
        </div>
      </div>
    );
  }
}

export default Game;
