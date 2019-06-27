import React from 'react';

const Message = props => {
  return (
    <div className="game-message__wrapper fade-in">
      <h2 className="game-message__error">{props.message}</h2>
      <h1
        style={{
          display: !props.display || props.play ? 'none' : 'block'
        }}>
        Click on Start game button to play!
      </h1>
      <h2
        className="game-message__rounds"
        style={{
          display: !props.display || props.play ? 'none' : 'block'
        }}>
        You will play: {props.value} rounds!
      </h2>
    </div>
  );
};

export default Message;
