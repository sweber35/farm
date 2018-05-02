import React, { Component } from 'react';
import Widget from './Widget';
import styled from 'styled-components';

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #11192E;
  color: white;
  font-size: 3em;
`;

class SubWidget extends Component {
  constructor( props) {
    super(props);
    
    /* props */
    Contents.attrs = {
      title: 'SubWidget'
    };
    
    this.state = {
      test: 'b'
    }
  }
  
  render() {

    return(
      <Contents className={this.props.className}>
        {this.props.children}
      </Contents>
    );
    
  } 
}

export default SubWidget;