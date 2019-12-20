import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Toggle from '../SideDrawer/Toggle/Toggle';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Toggle clicked={props.drawerToggleClicked}/>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default toolbar;
