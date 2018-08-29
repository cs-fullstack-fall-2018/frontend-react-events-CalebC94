import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ScoreKeeper from "./ScoreKeeper";

ReactDOM.render(<ScoreKeeper firstName={"Caleb"} />, document.getElementById('root'));
registerServiceWorker();
