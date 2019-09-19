import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store'
import RootRouter from './router';
import * as serviceWorker from './serviceWorker';
// import 'antd/dist/antd.css';
//按需引入
import {Provider} from 'react-redux'
import axios from 'utils/axios.js'

React.Component.prototype.$axios = axios
ReactDOM.render(
    <Provider store = {Store}>
        <RootRouter />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
