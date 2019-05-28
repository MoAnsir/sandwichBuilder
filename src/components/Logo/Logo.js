import React from 'react';
import sandwichLogo from '../../assets/smallSandwichLogo.png';
import classes from './Logo.module.css';

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={sandwichLogo} />
    </div>
  );
}

export default logo;