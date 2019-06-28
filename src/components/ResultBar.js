import React from 'react';

const ResultTable = props => {
  return (
    <div
      className="game-score__results"
      style={{
        display: !props.play || props.winner ? 'none' : 'flex'
      }}>
      <div className="player-wrapper">
        <p className="player-result">You:</p>
        <p className="player-result__score">{props.playerWin}</p>
      </div>
      <div className="comp-wrapper">
        <p className="comp-result">Computer:</p>
        <p className="comp-result__score">{props.compWin}</p>
      </div>
    </div>
  );
};

export default ResultTable;
