import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
];

const buildControls = (props) => {
  return (
  <div className={classes.BuildControls}>
    {controls.map(el => (<BuildControl key={el.label} label={el.label}
      added={() => props.ingAdd(el.type)}
      removed={() => props.ingRemove(el.type)}
      disabled={props.disabled[el.type]}/>))}
  </div>
)};

export default buildControls;
