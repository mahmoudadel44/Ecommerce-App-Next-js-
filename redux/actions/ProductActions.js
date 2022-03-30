import * as types from "../types/types";
import { toast } from "react-toastify";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    //  const response = await axios.get("http://localhost:3000/products.json");
    dispatch({
      type: types.FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch (err) {
    toast.error(err);
  }
};
////////////////////////////////////////////////////////////////////////////////////////

export const getProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // const response = await axios.get(
    //   `http://localhost:3000/products.json/${id}`
    // );

    dispatch({
      type: types.FETCH_PRODUCT,
      payload: response.data,
    });
  } catch (err) {
    toast.error(err);
  }
};

////////////////////////////////////////////////////////////////////////////////////////

export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch({
      type: types.FETCH_CATEGORIES,
      payload: response.data,
    });
  } catch (err) {
    toast.error(err);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const filterCategories = (category) => async (dispatch) => {
  let path = category !== "ALL" ? `category/${category}` : "";
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${path}`
    );
    dispatch({
      type: types.FILTER_CATEGORY,
      payload: response.data,
      category,
    });
  } catch (err) {
    toast.error(err);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
export const filterPrice = (sortedItems, sort) => (dispatch) => {
  let products = sortedItems.slice();
  return dispatch({
    type: types.FILTER_PRICE,
    payload: {
      sort: sort,
      items: products.sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : sort === "latest"
          ? a.id > b.id
            ? 1
            : -1
          : null
      ),
    },
  });
};
//////////////////////////////////////////////////////////////////////////////////////
export const filterSort = (products, sort) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products?sort=${sort}`
    );
    dispatch({
      type: types.FILTER_SORT,
      payload: sort === "all" ? products : response.data,
      sort: sort,
    });
  } catch (err) {
    toast.error(err);
  }
};
