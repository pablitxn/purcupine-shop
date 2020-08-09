// Types
import { ReactNode } from "react";

export interface AppLayoutProps {
  children: ReactNode;
  navbarProps: NavbarProps;
}
export interface ActiveUser {
  name: string;
  email: string;
  phone_number: number;
}

type NavbarProps = {
  activeUser: ActiveUser;
  cartItems?: CartItems;
}

type CartItems = {
  name: string;
  price: number;
}