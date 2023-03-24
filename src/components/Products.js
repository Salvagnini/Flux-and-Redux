import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

  const coffee = useSelector((state) => state.coffee)
  const sugar = useSelector((state) => state.sugar)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const dispatchFunc = useDispatch();

  const incrementCoffee = () => {
    dispatchFunc({ type: 'INCREMENT_COFFEE' })
  }
  const decrementCoffee = () => {
    dispatchFunc({ type: 'DECREMENT_COFFEE' })
  }

  const increaseCoffee = () => {
    dispatchFunc({ type: 'INCREASE_COFFEE', number: 10 })
  }

  const incrementSugar = () => {
    dispatchFunc({ type: 'INCREMENT_SUGAR' })
  }
  const decrementSugar = () => {
    dispatchFunc({ type: 'DECREMENT_SUGAR' })
  }

  const increaseSugar = () => {
    dispatchFunc({ type: 'INCREASE_SUGAR', number: 10 })
  }

  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={incrementCoffee}>+</button>
        <button onClick={decrementCoffee}>-</button>
        {isLoggedIn &&
          <button onClick={increaseCoffee}>+10</button>}
      </div>

      <div className='product'>
        <span>{`Sugar: ${sugar}`}</span>
        <button onClick={incrementSugar}>+</button>
        <button onClick={decrementSugar}>-</button>
        {isLoggedIn &&
          <button onClick={increaseSugar}>+10</button>
        }
      </div>

    </>
  )
}

export default Products