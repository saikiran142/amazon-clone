import React, { forwardRef } from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import SubTotal from "./SubTotal/SubTotal";
import FlipMove from "react-flip-move";
const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad"
        />

        <div>
          {user ? <h3>Hello, {user.email}</h3> : null}
          <h2 className="checkout__leftTitle">Your Shopping Basket</h2>
          <FlipMove>
            {basket.map((item) => (
              <div key={item.id + Math.random()}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                />
              </div>
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
