import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions/ProductActions";

//Components
import CartScreen from "../../pages/CartScreen";
import ReactPaginate from "react-paginate";
import ProductCard from "../Cards/Product";
import Filters from "../Filters/Filters";
import NotFound from "../../pages/404";
import Spinner from "../Spinner/Spinner";
import MainCarousel from "../Carousel/MainCarousel";
import Tabs from "../Tabs/Tabs";
import AllSettings from "../AllSettings/AllSettings";
import TopSelling from "../TopSelling/TopSelling";

const Products = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.Products.filteredItems);
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

  if (!loading && !filteredProducts) {
    return <NotFound />;
  }
  if (loading) {
    return <Spinner />;
  }

  console.log("allllll", filteredProducts);
  return (
    <>
      <MainCarousel />
      <section className="allProducts mt-5" style={{ marginTop: "-1000px" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {filteredProducts &&
                  filteredProducts
                    .slice(pagesVisited, pagesVisited + productsPerPage)
                    .map((product) => (
                      <ProductCard productData={product} key={product.id} />
                    ))}
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
          <AllSettings />
          <Tabs />
          <TopSelling />
        </div>
      </section>
    </>
  );
};

export default Products;