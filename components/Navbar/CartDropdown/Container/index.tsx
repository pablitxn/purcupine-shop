// @ts-nocheck
// React
import React, { FC } from "react";
// Custom Components
import CartItem from "components/Navbar/CartDropdown/Item";
// Types
// import { ContainerProps } from "./types";
// Styles
import "./styles.scss"

const Container: FC = ({ cartItems }) => {
  const handleClick = (event: any) => {
    // event.preventDefault();
    // navigationButton();
    // handleDropdown();
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__item">
        {cartItems.length ? (
          cartItems.map((cartItem, i) => (
            <CartItem key={i} cartItem={cartItem} />
          ))
        ) : (
            <span className="cart-dropdown__item--empty">Your cart is empty</span>
          )}
      </div>
      <button className="cart-dropdown__button" onClick={handleClick}></button>
    </div >
  )
}

export default Container;
