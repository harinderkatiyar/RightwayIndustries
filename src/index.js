import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import express from 'express';
// import bodyParser from 'body-parser';

// var cors = require('cors')
// var app = express()


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
 
// app.use(cors())

// app.get('/',(req, res, next)=>{
// console.log("hello");
//   res.send("welcome to my forma")
// })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
