import React, { Component } from "react";
import "../App.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      rounds: 0,
      playerWin: 0,
      compWin: 0,
      queue: 0,
      compChoice: "",
      playerChoice: "",
      score: "",
      input: false,
      playLog: [],
      display: false,
      play: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.playGame = this.playGame.bind(this);
    this.valueEnter = this.valueEnter.bind(this);
  }

  clickHandler(e) {
    this.setState({
      rounds: this.state.value,
      message: "",
      input: true,
      play: true
    });
  }

  valueEnter(e){
    // let value = e.target.value;
    if(e.key === 'Enter'){
      this.setState({
        value: e.target.value,
        // message: "",
        display: true
      })
   }
  }

  changeHandler(event) {
    let value = event.target.value;
    console.log(value);
    if (!isNaN(value) || value === null) {
      this.setState({
        value: event.target.value,
        message: "",
        // display: true
      });
    } else if (this.state.disabled === true && this.state.rounds > 0) {
      this.setState({ message: "" });
    } else {
      this.setState({ message: "Wprowadź liczbę większą od zera!" });
    }
  }

  playGame(id) {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    this.setState({ message: "Wprowadź liczbę większą od zera!" });
    let choices = ["", "rock", "paper", "scissors"];
    let comp = choices[randomChoice];

    function scored() {
      if (comp === id) {
        return "Tie";
      } else if (
        (comp === "rock" && id === "paper") ||
        (comp === "paper" && id === "scissors") ||
        (comp === "scissors" && id === "rock")
      ) {
        return "You WON!";
      } else {
        return "Computer WON!";
      }
    }
    const score = scored();
    function winner() {
      if (score === "You WON!") {
        return 1;
      } else if (score === "Computer WON!") {
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
        message: "",
        compChoice: comp,
        playerChoice: id,
        score: score,
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
    console.log(
      "player " +
        player +
        " comp " +
        compw +
        " rounds " +
        value +
        " queue " +
        queue
    );
    function gameViner() {
      if (player >= value && player > compw && queue >= rounds) {
        return "You WON!!!";
      } else if (compw >= value && compw > player && queue >= rounds) {
        return "Computer WON!!!";
      }
    }
    const vinner = gameViner();

    return (
      <div className="game">
        <h1 className="game-header">Paper, rock, scissors...</h1>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter a round number"
            value={this.state.value}
            onChange={this.changeHandler}
            onKeyPress={this.valueEnter}
            disabled={this.state.input}
            className="game-input"
            style={{
              display: !this.state.display ? "block" : "none"
            }}
          />
          <button
            className="start-game__button"
            style={{
              display: !this.state.display || this.state.play ? "none" : "block"
            }}
            onClick={this.clickHandler}
          >
            Start game
          </button>
        </div>
        <div className="game-message__wrapper">
          <h2 className="game-message__error">{this.state.message}</h2>
          <h2
            className="game-message__rounds"
            style={{
              display: !this.state.display ? "none" : "block"
            }}
          >
            You will play: {this.state.value} rounds!
          </h2>
          <h1
            style={{
              display: !this.state.display || this.state.play ? "none" : "block"
            }}
          >
            Click on start button to play!!
          </h1>
        </div>
        <div
          className="game-buttons__play"
          style={{
            display: !this.state.play ? "none" : "flex"
          }}
        >
          <button onClick={e => this.playGame(e.target.id)} id={"paper"}>
            Paper
          </button>
          <button onClick={e => this.playGame(e.target.id)} id={"rock"}>
            Rock
          </button>
          <button onClick={e => this.playGame(e.target.id)} id={"scissors"}>
            Scissors
          </button>
        </div>
        <div
          className="game-score__results"
          style={{
            display: !this.state.play ? "none" : "flex"
          }}
        >
          <div className="player-wrapper">
            <p className="player-choice__label">You choose:</p>
            <p className="player-choice">{this.state.playerChoice}</p>
            <div className="wins-wrapper">
              <p className="player-result">Wins:</p>
              <p className="player-result">{this.state.playerWin}</p>
            </div>
          </div>
          <div className="comp-wrapper">
            <p className="comp-choice__label">Computer choose:</p>
            <p className="comp-choice">{this.state.compChoice}</p>
            <div className="wins-wrapper">
              <p className="comp-result">Wins:</p>
              <p className="comp-result">{this.state.compWin}</p>
            </div>
          </div>
        </div>
        <div className="vinner-wrapper">
          <h2 className="vinner-header">{this.state.score}</h2>
        </div>
        <h1 className="game-vinner">{vinner}</h1>
        <div
          className="game-log"
          style={{
            display: !vinner ? "none" : "flex"
          }}
        >
          <table className="result-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Player</th>
                <th>Computer</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {this.state.playLog.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.You}</td>
                  <td>{item.Computer}</td>
                  <td>{item.Result}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* // </div> */}
        </div>
      </div>
    );
  }
}

export default Game;
