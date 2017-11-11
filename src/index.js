import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";

<<<<<<< HEAD
import { createStore  } from "redux";
import reducer from './reducer';

const store = createStore(
    reducer
=======
import reducer from './reducer';

/** IF YOU WANT USE redux-logger YOU MUST UNCOMMENTS LINES 1-4 AND COMMENTS LINE a-c 
 * OR OPOSITE FOR USE redux-devtools
 * 
 * FOR USE BOTH UNCOMMENT LINES 1-4 and b-c
 * 
*/
// import { createStore, applyMiddleware } from "redux";   // (1)
import { createStore } from "redux";                    // (a)

import DevTools from './DevTools';              // (b)
// import { createLogger } from 'redux-logger';   // (2)
// const logger = createLogger();                 // (3)

const store = createStore(
    reducer
    , DevTools.instrument()                     // (c)
//    , applyMiddleware(logger)                    // (4)
>>>>>>> middlewares
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();