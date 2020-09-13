import React from "react";
import "./ProductItem.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../../StateProvider";

function ProductItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    console.log("Herer");
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="productItem">
      <div className="productItem__info">
        <p>{title} </p>
        <p className="productItem__price">
          <small>₹</small>
          <strong className="productItem__price">{price}</strong>
        </p>
        <div className="productItem__rating">
          {[...new Array(rating)].map((i) => {
            return (
              <p key={Math.random()}>
                <StarIcon className="productItem__starImage" />
              </p>
            );
          })}

          {/* <p>
            <StarIcon className="productItem__starImage" />
          </p>
          <p>
            <StarIcon className="productItem__starImage" />
          </p> */}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default ProductItem;
