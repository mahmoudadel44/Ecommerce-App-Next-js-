import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions/ProductActions";

//Components
import CartScreen from "../CartScreen/CartScreen";
import ReactPaginate from "react-paginate";
import ProductCard from "../Cards/Product";
import Filters from "../Filters/Filters";
import NotFound from "../../pages/404";
import Spinner from "../Spinner/Spinner";
import MainCarousel from "../Carousel/MainCarousel";
import Tabs from "../Tabs/Tabs";
import AllFeatures from "../AllFeatures/AllFeatures";
import TopSelling from "../TopSelling/TopSelling";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

//Css
import styles from "../../styles/Products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.Products?.filteredItems
  );

  const loading = useSelector((state) => state.Products.loading);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 4;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  if (!filteredProducts) {
    return <NotFound />;
  }

  return (
    <>
      <MainCarousel />
      <section className={`${styles.allProducts} mt-5`}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {filteredProducts
                  ? filteredProducts
                      ?.slice(pagesVisited, pagesVisited + productsPerPage)
                      .map((product) => (
                        <ProductCard productData={product} key={product.id} />
                      ))
                  : null}
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <Filters />
              <CartScreen />
            </div>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
          <Tabs />
          <AllFeatures />
        </div>
        <TopSelling />
        <ContactUs />
        <Footer />
      </section>
    </>
  );
};

export default Products;
