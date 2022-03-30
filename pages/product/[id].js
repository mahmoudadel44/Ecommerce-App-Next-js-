import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { getProduct } from "../../redux/actions/ProductActions";

//Components
import Spinner from "../../components/Spinner/Spinner";

//Css
import styles from "../../styles/Products.module.css";

const SingleProduct = () => {
  const productData = useSelector((state) => state.Products?.product);
  const dispatch = useDispatch();

  const { id } = useRouter().query;
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <link
          rel="icon"
          href="https://image.shutterstock.com/image-vector/selfservice-supermarket-full-shopping-trolley-260nw-374614351.jpg"
        />
      </Head>

      {productData && productData.image ? (
        <section className="singleProduct">
          <div className="container">
            <div
              className={` ${styles.showDetails}  
`}
            >
              <Link href={"/"}>
                <div className="btn btn-success mt-5 text-white w-50">
                  Go Home
                </div>
              </Link>
            </div>
            <div className="row mt-4">
              <div
                className="col-md-6 pt-5 d-flex flex-column justify-content-center align-items-center
          "
              >
                <div className={styles.singleImgContainer}>
                  <img
                    src={productData.image}
                    alt="productimg"
                    className={styles.singleProductImg}
                    layout="fill"
                  />
                </div>

                <span className="text-muted fw-bold mt-3">
                  {productData.category}
                </span>
              </div>
              <div className="col-md-6 pt-5">
                <h2 className="card-title mt-4 text-center">
                  {productData.title}
                </h2>
                <h5 className="mt-2 text-muted text-center mt-3">
                  ${productData.price}
                </h5>
                <p className="card-text lead text-center mt-4">
                  {productData?.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SingleProduct;
