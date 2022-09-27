import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons";
import { getProducts } from "./dataService";
import { useEffect, useState } from "react";
import Product from "./Products";

const Checkout = () => {
  const [data, setData] = useState([]);
  const [priceSamary, setPriceSamary] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(loading);
    getProducts().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (priceSamary > 1000) {
      setDiscount(10);
    }
  }, [priceSamary]);

  useEffect(() => {
    if (priceSamary > 1000) {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  }, [priceSamary]);

  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {loading ? <LoadingIcon /> : null}

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, index) => (
              <Product key={index} data={p} setPriceSamary={setPriceSamary} />
            ))}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount: ${discount}</p>
        <p>Original_price Total: ${priceSamary?.toFixed(2)}</p>
        {discount > 0 && (
          <p>
            Discounted_price : $
            {(priceSamary - (priceSamary * discount) / 100)?.toFixed(2)}
          </p>
        )}
      </main>
    </div>
  );
};

export default Checkout;
