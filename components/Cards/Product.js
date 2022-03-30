import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../redux/actions/CartActions";

//Components
import ReactImageZoom from "react-image-zoom";

//Css
import styles from "../../styles/Products.module.css";

const Product = ({ productData }) => {
  const cartItems = useSelector((state) => state.Cart?.cartItems);
  const dispatch = useDispatch();
  const props = {
    width: 230,
    zoomWidth: 500,
    img: productData.image,
    height: 150,
  };

  return (
    <>
      <div className={`${styles.allCards} col-lg-6  col-sm-12 mb-3`}>
        <div className={styles.card}>
          <Link
            href={`/product/${productData.id}`}
            className={`${styles.productCard} py-3`}
          >
            <>
              <div
                className={styles.imageZoomContainer}
                style={{ position: "relative", zIndex: "1000" }}
              >
                <ReactImageZoom {...props} />
              </div>
              <div className="card-body pb-0">
                <h5 className="card-title">{productData.title.slice(1, 60)}</h5>
                <h6 className="mt-2 text-muted">${productData.price}</h6>
                <p className="card-text">
                  {productData?.description.slice(1, 70) + "........."}
                </p>
              </div>
            </>
          </Link>
        </div>

        <button
          className="btn btn-success mt-3"
          onClick={(e) => {
            dispatch(addToCart(cartItems, productData));
            e.stopPropagation();
          }}
        >
          Add To Cart
        </button>
        <div
          className={` ${styles.showDetails} btn btn-success mt-2 text-white`}
        >
          <Link href={`/product/${productData.id}`}>
            <a>show Details</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
