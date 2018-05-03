import React, { Component } from 'react';
import SubWidget from './SubWidget';
import styled from 'styled-components';
import JumboButton from './JumboButton';

const Contents = styled(SubWidget)`
  width: 6%;
  height: 100%;
  vertical-align: top;
  
  display: flex;
  flex-direction: column;
`;

class JumboButtonContainer extends Component {
  
  render() {

    return(
      <Contents className={this.props.className}>
        {this.props.children}
      </Contents>
    );
  } 
}
export default JumboButtonContainer;