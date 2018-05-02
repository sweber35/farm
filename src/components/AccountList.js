import React, { Component } from 'react';
import Omnibox from './Omnibox';
import './styles/AccounstList.css';

class AccountList extends Component {
  
  onMouseClick() {
    alert('Clicked!');
  }
  
  render() {
      
    return (
      <div className="accountList">
        <Omnibox />
      </div>
    );
  }
}

export default AccountList;
