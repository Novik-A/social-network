import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, { AppStateType } from "./Redux/redux-store";
import {App} from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state}/>
            </Provider>
            {/*<App */}
            {/*     dispatch={store.dispatch.bind(store)}*/}
            {/*     store={store}*/}
            {/*/>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
