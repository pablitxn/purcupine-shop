// React
import React, { FC } from "react";
// Types
import { IconProps } from "./types"
// Styles
import "./styles.scss";


const Icon: FC<IconProps> = ({ toggleCartHidden, itemCount }) => {

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <div className="shoping-icon" />
      <div className="cart-icon__count">{itemCount}</div>
    </div>
  )
}

export default Icon;
