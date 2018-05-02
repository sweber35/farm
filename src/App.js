import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import JumboButton from './components/JumboButton';
import AccounstList from './components/AccountList';
import JumboButtonContainer from './components/JumboButtonContainer';
import JumboInfo from './components/JumboInfo';
import ControlPanel from './components/ControlPanel';
import './App.css';

class App extends Component {
  
  render() {
          
    return (
      <div id="app">
        <Jumbotron>
          <JumboButtonContainer>
            <JumboButton value={'D'}/>
            <JumboButton value={'W'}/>
            <JumboButton value={'M'}/>
          </JumboButtonContainer>
          <JumboInfo />
        </Jumbotron>
        <AccounstList />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
