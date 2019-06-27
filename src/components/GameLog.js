import React from 'react';

const GameLog = props => {
  return (
    <div
      className="game-log"
      style={{
        display: !props.winner ? 'none' : 'flex'
      }}>
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
          {props.playLog.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.You}</td>
              <td>{item.Computer}</td>
              <td>{item.Result}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="start-game__button" onClick={props.resetGame}>
        Play again
      </button>
    </div>
  );
};

export default GameLog;
