import React, { Component } from 'react';
import Widget from './Widget';
import styled from 'styled-components';
import JumboButtonContainer from './JumboButtonContainer';

const Contents = styled(Widget)`
  grid-column: 1/17;
  grid-row: 1/3;
  display: flex;
`;

class Jumbotron extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {

    return(
      <Contents className={this.props.className}>
        {this.props.children}
      </Contents>
    );
  } 
}

export default Jumbotron;
