///import React from 'react';
///import ReactDOM from 'react-dom';
///import './index.css';
///import App from './eventHandler.js';
///import App from './s_components.js';
///import App from './App.js';
///import axios from 'axios';
///import './index.css';



/*
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
})
*/

/*
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
})



axios.get('http://localhost:3002/foobar').then(response => {
  const foobar = response.data
  console.log(foobar)
})
*/

/*axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
  )
})*/


/*ReactDOM.render(<App notes={notes} />, 
  document.getElementById('root'))
*/

/*ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/


/*}
let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />, 
  document.getElementById('root'))
}

setInterval(() => {
refresh()
counter += 1
}, 1000)
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
///reportWebVitals();
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))