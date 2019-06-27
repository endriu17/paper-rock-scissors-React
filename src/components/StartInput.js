import React from 'react';
import './StartSide.css'

const StartInput = props => {
  return (
    <div className="input-wrapper">
      <div
        className="game-buttons__play fade-in"
        style={{
          display: !props.display ? 'flex' : 'none'
        }}>
        <i className="icon-btn--result fas fa-hand-paper fa-10x loader-icon" />
        <i className="icon-btn--result fas fa-hand-rock fa-10x loader-icon" />
        <i className="icon-btn--result fas fa-hand-scissors fa-10x loader-icon" />
      </div>
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
        className="start-game__button fade-in"
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
