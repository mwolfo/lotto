import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/app';

let results = [
    { title: "one" },
    { title: "two" },
    { title: "three" }
];

const data = {
    fullDate: "EuroJackpot Results for Friday 07 Sep 2018"    
};

ReactDOM.render(<App listado={results} data={data} />, document.getElementById('root'));