import React, { Component } from 'react';
import './styles/ControlPanel.css';

class ControlPanel extends Component {
  
  onMouseClick() {
    alert('Clicked!');
  }
  
  render() {
      
    return (
      <div className="controlPanel">
        <div className="control-ButtonContainer">
          
        </div>
      </div>
    );
  }
}

export default ControlPanel;
