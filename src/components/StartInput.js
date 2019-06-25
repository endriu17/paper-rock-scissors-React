import React, { Component } from 'react';

const StartInput = props => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Enter a round number"
        value={props.value}
        onChange={props.changeHandler}
        onKeyPress={props.valueEnter}
        disabled={props.input}
        className="game-input"
        style={{
          display: !props.display ? 'block' : 'none'
        }}
      />
      <button
        className="start-game__button fade-in backGr"
        style={{
          display: !props.display || props.play ? 'none' : 'block'
        }}
        onClick={props.clickHandler}>
        Start game
      </button>
    </div>
  );
};

export default StartInput;
