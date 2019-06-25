import React, { Component } from 'react';

const RoundResult = props => {
  return (
    <div
      className="result-screen fade-in"
      style={{
        display: props.choose ? 'flex' : 'none',
        fontSize: '3rem',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
      {props.chooseButton}
      {props.chooseComp}
      <span className="single-play__result">{props.result}</span>
    </div>
  );
};

export default RoundResult;
