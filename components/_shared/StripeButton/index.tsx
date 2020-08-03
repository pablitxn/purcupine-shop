// React
import React, { FC } from "react"
// Types
import { StripeButtonProps } from "./types";
// Styles
import "./styles.scss"

const StripeButton: FC<StripeButtonProps> = ({ onClick }) => {

  const handleButton = (event: any) => {
    event.preventDefault();
    //   onClick();
    // }
  }

  return (
    <div className="">
      <button className="" onClick={handleButton}>PAY NOW</button>
    </div>

  )
}

export default StripeButton;

/**
 * Nota: usa la libreria 'react-stripe-checkout'
 *    label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
 *
 */