import React, {Component} from 'react';
import classes from './Layout.css';

import Aux from '../Auxiliary/Auxiliary';

class Layout extends Component {

  state = {

  }

  render () {
    return (
      <Aux>
        <mainNav>mainNav</mainNav>
        <mobileNav>mobileNav</mobileNav>
      </Aux>
    );
  }
}

export default Layout;