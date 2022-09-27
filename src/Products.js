import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";

const Product = ({ data, setPriceSamary }) => {
  const { id, name, availableCount, price, orderedQuantity } = data;
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  //   useEffect(() => {
  //     setPriceSamary((prev) => prev + totalPrice);
  //   }, [totalPrice]);

  /** handle Quantity Increase*/
  const handleQuantityIncrease = (data) => {
    if (quantity < availableCount) {
      console.log(Math.round(totalPrice).toFixed(2));
      setTotalPrice((prev) => prev + data.price);
      setQuantity((prev) => prev + 1);
      setPriceSamary((prev) => prev + data.price);
    } else
      alert("Your availableCount count is Low please Buy limited products❌");
  };
  /** handle Quantity Decrease*/
  const handleQuantityDecrease = (data) => {
    if (!Math.sign(totalPrice) === 0 || Math.sign(totalPrice) === -1) {
      alert("Negative Value Not Allaw");
    } else {
      console.log(Math.floor(totalPrice + data.price));
      setTotalPrice((prev) => prev - data.price);
      setQuantity((prev) => prev - 1);
      setPriceSamary((prev) => prev - data.price);
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{totalPrice?.toFixed(2)}</td>
      <td>
        <button
          title="You Add Maximum Products"
          onClick={() => handleQuantityIncrease(data)}
          className={
            quantity === availableCount
              ? `${styles.disableBtnStyle} ${styles.actionButton}`
              : styles.actionButton
          }
        >
          +
        </button>
        <button
          onClick={() => handleQuantityDecrease(data)}
          className={
            totalPrice === 0
              ? `${styles.disableBtnStyle} ${styles.actionButton}`
              : styles.actionButton
          }
        >
          -
        </button>
      </td>
    </tr>
  );
};

export default Product;
