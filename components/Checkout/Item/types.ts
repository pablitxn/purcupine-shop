export interface CheckoutItemProps {
  // cartItem: cartItem;
  cartItem: any;
  clearItem?: any;
  addItem?: any;
  removeItem?: any;
}

type cartItem = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}