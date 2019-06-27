import React, { Component } from 'react';
import './Result.css';

class PlayerWinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: false
    };

    function clearModal(e) {
      const modal = document.querySelector('.modal');
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    }
    window.addEventListener('click', clearModal);
  }

  addAnimation(modal) {
    if (modal === 'comp' && this.props.result === 'Computer') {
      return 'center 3s';
    } else if (modal === 'comp' && this.props.result === 'Tie') {
      return 'none';
    } else if (modal === 'comp' && this.props.result === 'You') {
      return 'modalhide 3s';
    }

    if (modal === 'player' && this.props.result === 'You') {
      return 'center 3s';
    } else if (modal === 'player' && this.props.result === 'Tie') {
      return 'none';
    } else if (modal === 'player' && this.props.result === 'Computer') {
      return 'modalhide 3s';
    }
  }

  setResult() {
    this.setState({
      result: true
    });
  }

  render() {
    return (
      <div
        className="modals-container"
        style={{
          display: this.props.choose ? 'flex' : 'none'
        }}>
        <div
          className="player"
          style={{
            animation: this.addAnimation('player')
          }}>
          <div className="modal">
            <div id="result-player" className="modal-content">
              <i
                className={`icon-btn--result fas fa-hand-${this.props.player} fa-10x`}
              />
              <p>
                Your Chose <strong>{this.props.player}</strong>
              </p>
            </div>
          </div>
        </div>
        <div
          className="comp"
          style={{
            animation: this.addAnimation('comp')
          }}>
          <div className="modal">
            <div id="result-player" className="modal-content">
              <i className={`icon-btn--result fas fa-hand-${this.props.comp} fa-10x`} />
              <p>
                Computer Chose <strong>{this.props.comp}</strong>
              </p>
            </div>
          </div>
        </div>
        <div
          id="modal-result"
          style={{
            dispaly: this.state.result === this.setResult ? 'flex' : 'none'
          }}>
          <div className="modal-content--result">
            <h1>
              Result:{' '}
              <strong>
                {this.props.result === 'Tie' ? 'Tie' : this.props.score}
              </strong>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerWinner;
