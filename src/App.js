import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import phiArray from './phiArray';

const phi = 1.6180339887498948482;

const App = props => (
  <div className="container">
    <div className="app">
      <h1>Phi Calculator</h1>
      <p>Phi = {phi}</p>
      <div className="input-container">
        <button
          className="button"
          type="button"
          onClick={() => props.updateBase(props.base - 1)}
        >
          Decrement
        </button>
        <input
          type="text"
          className="base-input"
          value={props.base}
          onChange={e => props.updateBase(e.target.value)}
        />
        <button
          className="button"
          type="button"
          onClick={() => props.updateBase(props.base + 1)}
        >
          Increment
        </button>
      </div>
      <div className="output-container">
        <ol>
          {phiArray.map((m, i) => (
            <li key={i}>{Math.round(props.base * m * 10000) / 10000}</li>
          ))}
        </ol>
        <ol>
          {phiArray.map((m, i) => (
            <li key={i}>{Math.round(props.base / m * 10000) / 10000}</li>
          ))}
        </ol>
      </div>
    </div>
    <footer>
      Source: <a href="https://github.com/samsch/phi-calculator">https://github.com/samsch/phi-calculator</a>
    </footer>
  </div>
);
App.propTypes = {
  base: PropTypes.number.isRequired,
  updateBase: PropTypes.func.isRequired,
};

export default App;
