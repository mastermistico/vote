import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from './App';
import myApp from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(myApp);


ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
)

/*store.subscribe(render);
render();*/

registerServiceWorker();
