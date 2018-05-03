import React, { Component } from 'react';
import './styles/Omnibox.css';

class Omnibox extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {input: '', active: false};
    this.logInput = this.logInput.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }
  
  logInput(event) {
    
    this.setState({[event.target.name]: event.target.value});
    //console.log(this.state.input)
  }
  
  toggleButton(event) {
    
    this.setState({active: !this.state.active})
    
  }
  
  render() {
      
    return (
      <div className="omnibox">
        <div className="filterButton"
             style={{backgroundColor: this.state.active ? "aqua" : "gray"}}
             onClick={this.toggleButton}>
        </div>
      
        <input className="omniboxInput" type="text"
        name="input"
        value={this.state.input}
        onChange={this.logInput} />
      </div>
    );
  }
}

export default Omnibox;
