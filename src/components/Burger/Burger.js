import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  let ing = Object.keys(props.ingredients).map(el => {
    return [...Array(props.ingredients[el])].map((_, i) => {
        return <BurgerIngredient key={el + i} type={el} />;
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if (ing.length ===0) {
    ing = <p> Please start adding ingredients! </p>
  };

return(
  <div className={classes.Burger}>
    <BurgerIngredient type='bread-top' />
    {ing}
    <BurgerIngredient type='bread-bottom' />
  </div>
);
};

export default burger;
