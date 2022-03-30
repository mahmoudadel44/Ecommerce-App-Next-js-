import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

//Css
import styles from "../../styles/Cart.module.css";

import { removeFromCart } from "../../redux/actions/CartActions";

const Cart = () => {
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems &&
        cartItems?.map((item) => (
          <div
            className={`${styles.cartContent}`}
            key={item.id}
          >
            <div className="d-flex">
              <div className={styles.imgContainer}>
                <Image
                  src={item?.image}
                  alt="example"
                  layout="fill"
                  className={styles.cartImage}
                />
              </div>
              <div className={`${styles.cartInfo}`}>
                <h6>Name: {item?.title}</h6>
                <h6>Price: {item?.price}</h6>
                <h6>count: {item?.count}</h6>
              </div>
            </div>
            <div
              className="deleteContainer"
              onClick={() => {
                dispatch(removeFromCart(cartItems, item));
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        ))}
      {cartItems.length !== 0 && (
        <div className={styles.totalContainer}>
          <h6 className="fw-bold">
            Total : $
            {cartItems?.reduce((acc, p) => {
              return acc + p.price * p.count;
            }, 0)}
          </h6>
          <div> </div>
        </div>
      )}
    </>
  );
};

export default Cart;
