import React from "react";
import "./SubTotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            <p>
              {/* Subtoal (0 items): <strong>{`$value`}</strong> */}
              Subtoal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default SubTotal;
