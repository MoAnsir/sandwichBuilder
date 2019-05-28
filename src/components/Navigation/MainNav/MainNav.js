import React from 'react';
import classes from './MainNav.module.css';

import Logo from '../../Logo/Logo';

const mainNav = (props) => {
  return (
    <div className={classes.MainNav}>
      <div>Menu</div>
      <Logo />
      <div>Nav Items</div>
    </div>
  );
}

export default mainNav;