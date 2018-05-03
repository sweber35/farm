import React, { Component } from 'react';
import SubWidget from './SubWidget';
import styled from 'styled-components';

const Contents = styled(SubWidget)`
  background-color: blue;
  color: #11192E;
  width: 100%;
  height: 100%;
  border: 1px solid black;  
  
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 40px;
`;

class JumboButton extends Component {
  
  render() {

    return(
      <Contents className={this.props.className}>
        {this.props.value}
      </Contents>
    );
  } 
}
export default JumboButton;