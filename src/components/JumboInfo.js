import React, { Component } from 'react';
import SubWidget from './SubWidget';
import styled from 'styled-components';

const Contents = styled(SubWidget)`
  background-color: #11192E;
  color: #E5E5E5;
  flex: 1;
  width: 90%;
  font-size: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class JumboInfo extends Component {
  
  render() {

    return(
      <Contents className={this.props.className}>
        <div>Gold Earned: 105m</div>
      </Contents>
    );
  } 
}
export default JumboInfo;