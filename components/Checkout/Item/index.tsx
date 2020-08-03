// React
import React, { FC } from "react";
// Types
import { CheckoutItemProps } from "./types";
// Styles
import "./styles.scss";

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={imageUrl} alt='item' className="image" />
      </div>
      <span className="cart-item__name" >{name}</span>
      <div className="cart-item__quantity">
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </div>
      <span className="cart-item__price">{price}</span>
      <div className="card-item__remove" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem;
