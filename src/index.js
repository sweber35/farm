import React, { Component } from 'react';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App.js';

//const express = require('express');
ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();