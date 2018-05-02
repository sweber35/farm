import React, { Component } from 'react';
import styled from 'styled-components';

const Contents = styled.div`
  display: flex;
  border: 2px solid #00E5E5;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: #11192E;
  color: white;
  margin: 1em;
`;

class Widget extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      test: 'a'
    };
  }
  
  render() {

    return(
      <Contents className={this.props.className}>
        {this.props.children}
      </Contents>
    );
    
  } 
}

Widget.defaultProps = {
  title: "Widget"
}

export default Widget;