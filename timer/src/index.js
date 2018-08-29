import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ScoreKeeper from "./ScoreKeeper";

ReactDOM.render(<ScoreKeeper scoreKeep={0} />, document.getElementById('root'));
registerServiceWorker();
