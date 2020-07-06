import React from "react";
import ReactDOM from "react-dom";
import App from './App'

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2020-07-06T19:49:30.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2020-07-06T19:49:30.098Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2020-07-06T19:49:30.098Z",
    important: true,
  },
];

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)