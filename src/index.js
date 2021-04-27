import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderAllTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


renderAllTree(store.getState());

store.subscribe(renderAllTree);

reportWebVitals();