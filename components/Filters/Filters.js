import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import {
  filterCategories,
  filterPrice,
  filterSort,
  getCategories,
} from "../../redux/actions/ProductActions";

const Filters = ({}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Products.categories);
  const filteredItems = useSelector((state) => state.Products.filteredItems);
  const category = useSelector((state) => state.Products.category);
  const sort = useSelector((state) => state.Products.sort);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <div className="card">
        <h6 className="card-header">Filters </h6>
        <div className="card-body text-left">
          <p className="card-title">
            Number of Products : {filteredItems?.length + " "}
            Products
          </p>
          <h5 className="card-text mt-3">Filter Category</h5>
          <select
            onChange={(e) => {
              dispatch(filterCategories( e.target.value));
            }}
            value={category}
          >
            <option value="ALL">ALL</option>
            {categories &&
              categories.map((categoryy) => (
                <option value={categoryy} key={categoryy}>
                  {categoryy}
                </option>
              ))}
          </select>
          <h5 className="card-text mt-3">Filter Price</h5>
          <select
            onChange={(e) =>
              dispatch(filterPrice(filteredItems, e.target.value))
            }
            value={sort}
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
          <h5 className="card-text mt-3">Sorting</h5>

          <select
            onChange={(e) =>
              dispatch(filterSort(filteredItems, e.target.value))
            }
            value={sort}
          >
            {" "}
            <option value="all">All</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
