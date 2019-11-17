import React, { Component } from 'react';

import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';

class Footer extends Component {
  handleClick(type) {
    this.props.onFooterClick(type);
  }

  render() {
    const { activeTab } = this.props;
    return (
        <BottomNavigation showLabels>
          {['list', '+', 'wish-list'].map(item => <BottomNavigationAction key={item} label={item} />)}
        </BottomNavigation>
    );
  }
}

export default Footer;
