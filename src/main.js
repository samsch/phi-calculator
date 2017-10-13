import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from '@samsch/subscribe-store';

const phiInputStore = createStore({ base: 1 });
const updateBase = value => phiInputStore.updateState({ base: value });

const appRootElement = document.getElementById('app-root');

const render = () => {
  ReactDOM.render(
    <App base={phiInputStore.state.base} updateBase={updateBase} />,
    appRootElement
  );
};

phiInputStore.subscribe(render);

render();
