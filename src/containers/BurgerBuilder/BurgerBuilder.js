import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1.5,
  meat: 3,
  bacon: 3
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    canBuy: false,
    buying: false
  }

  purchaseState(ingredients){
    const sum = Object.keys(ingredients).map(el => {
      return ingredients[el];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({canBuy: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.purchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.purchaseState(updatedIngredients);
  };

  buyingHandler = () => {
    this.setState({buying: true});
  }

  cancelPurchase = () => {
    this.setState({buying: false});
  }

  continuePurchase = () => {
    alert('Order Complete!')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    };

    return (
      <Aux>
        <Modal show={this.state.buying} modalClosed={this.cancelPurchase}>
          <OrderSummary
          price={this.state.totalPrice}
          canceled={this.cancelPurchase}
          continued={this.continuePurchase}
          ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingAdd={this.addIngredientHandler}
        ingRemove={this.removeIngredientHandler}
        disabled={disabledInfo}
        canBuy={this.state.canBuy}
        ordered={this.buyingHandler}
        price={this.state.totalPrice}/>
      </Aux>
    );
  }
};

export default BurgerBuilder;
