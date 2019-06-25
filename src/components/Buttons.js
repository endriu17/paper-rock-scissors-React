import React, { Component } from 'react';

const Buttons = props => {
  return (
    <div
      className="buttons-wrapper fade-in"
      style={{
        display: !props.play || props.winner ? 'none' : 'flex'
      }}>
      <div className="game-buttons__play">
        <i
          onClick={e => props.playGame(e.target.id)}
          id={'paper'}
          className="fas fa-hand-paper fa-10x"
        />
        <i
          onClick={e => props.playGame(e.target.id)}
          id={'rock'}
          className="fas fa-hand-rock fa-10x"
        />
        <i
          onClick={e => props.playGame(e.target.id)}
          id={'scissors'}
          className="fas fa-hand-scissors fa-10x"
        />
      </div>
      <h1 className="choose-info">Make a choose!</h1>
    </div>
  );
};

export default Buttons;
