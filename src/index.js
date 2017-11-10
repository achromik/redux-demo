import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducer from './reducer';

import {createComment} from './actions'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


    store.dispatch(createComment('pierwszy komentarz'));
    store.dispatch(createComment('drugi komentarz'));
    

registerServiceWorker();