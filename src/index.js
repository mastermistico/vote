import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Results from './components/results';
import App from './App';
import myApp from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(myApp);


ReactDOM.render(
  <Provider store={store}>
    <App  />
    <hr/>
    <Results/>
  </Provider>,
  document.getElementById('root')
)

/*store.subscribe(render);
render();*/

registerServiceWorker();
