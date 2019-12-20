import React from 'react';
import classes from './Toggle.css';

const drawerToggle = (props) => {
  return (
  <div className={classes.Toggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
};

export default drawerToggle;
