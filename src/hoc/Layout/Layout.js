import React, {Component} from 'react';
import classes from './Layout.module.css';

import Aux from '../Auxiliary/Auxiliary';
import MainNav from '../../components/Navigation/MainNav/MainNav';
import MobileNav from "../../components/Navigation/Mobilenav/Mobilenav";

class Layout extends Component {

  state = {

  }

  render () {
    return (
      <Aux>
        <MainNav>mainNav</MainNav>
        <MobileNav>mobileNav</MobileNav>
      </Aux>
    );
  }
}

export default Layout;