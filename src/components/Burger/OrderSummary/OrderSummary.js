import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  const ingSum = Object.keys(props.ingredients).map(el => {
    return (<li key={el}>
      <span style={{textTransform: 'capitalize'}}>
    {el}</span>: {props.ingredients[el]}
    </li>);
  })

return (
  <Aux>
    <h3>Your Order</h3>
    <p>Delicious Veggie Burger with the following ingredients:</p>
    <ul>
      {ingSum}
    </ul>
    <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
    <p>Continue to checkout?</p>
    <Button clicked={props.canceled} btnType='Danger'>CANCEL</Button>
    <Button clicked={props.continued} btnType='Success'>CONTINUE</Button>
  </Aux>
)};

export default orderSummary;
