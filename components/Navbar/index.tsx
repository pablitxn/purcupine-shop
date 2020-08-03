// React
import React, { FC } from "react";
// Custom Components
import CartDropdown from "components/Navbar/CartDropdown/Container";
import CartDropdownIcon from "components/Navbar/CartDropdown/Icon";
// Types
import { NavbarProps } from "./types";
// Styles
import "./styles.scss";

const Navbar: FC<NavbarProps> = ({ activeUser, hidden, loginButton = () => { } }) => {

  const handleClick = (event: any) => {
    loginButton();
  }

  return (
    <nav className="navbar">
      <img src="" alt="logo crwn clothing" className="navbar__logo" />
      <li className="navbar__options">
        <ul>SHOP</ul>
        <ul>CONTACT</ul>
        {activeUser ? (
          <ul>MI CUENTA</ul>
        )
          : (
            <ul onClick={handleClick}>SIG IN</ul>
          )
        }
        <ul>
          <CartDropdownIcon toggleCartHidden={() => { }} itemCount="" />
        </ul>
      </li>
      {hidden ? null : <CartDropdown />}
    </nav>
  )
}

export default Navbar;
