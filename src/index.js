import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import {createBrowserHistory} from "history"
import thunk from "redux-thunk";
import {routerMiddleware, ConnectedRouter} from "connected-react-router"
import {composeWithDevTools} from "redux-devtools-extension"
import {Provider} from "react-redux"

import createRootReducer from "./reducers";
import Router from "./router"
import './style/index.css';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
