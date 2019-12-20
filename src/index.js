import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './store.js';


ReactDOM.render(<App store={STORE} application="Trelloyes!" />, 
                document.getElementById('root'));