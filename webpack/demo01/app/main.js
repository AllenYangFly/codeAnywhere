const greeter = require('./Greeter.js');
const Search = require('./search.jsx');
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(<Search /> ,document.getElementById('root'));

document.getElementById('root').appendChild(greeter());