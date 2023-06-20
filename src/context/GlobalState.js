import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import API from "./API";

const initialState = {
  productList: API,
  searchResult: API,
  selectedCategory: [],
  selectedMaterial: [],
  selectedRange: [],
  cart: [],
  // searchText: "", // Add searchText property
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const loadProductList = (product) => {
    dispatch({
      type: "SET_PRODUCT_LIST",
      payload: product,
    });
  };

  const filterProduct = (value) => {
    debugger;
    dispatch({
      type: "SET_PRODUCT_FILTER",
      payload: value,
    });
  };

  const setSelectedCategory = (category) => {
    dispatch({
      type: "SET_CATEGORY_CHECK",
      payload: category,
    });
  };

  const setSelectedMaterial = (material) => {
    dispatch({
      type: "SET_MATERIAL_CHECK",
      payload: material,
    });
  };

  const setSelectedRange = (range) => {
    dispatch({
      type: "SET_RANGE_CHECK",
      payload: range,
    });
  };

  const setSearchText = (text) => {
    debugger;
    dispatch({ type: "SET_SEARCH_PRODUCT", payload: text });
  };

  const addToCart = (product) => {
    dispatch({
      type: "SET_ADD_PRODUCT_IN_CART",
      payload: product,
    });
  };

  const deleteProductFromCart = (productId) => {
    dispatch({
      type: "SET_DELETE_PRODUCT_FROM_CART",
      payload: productId,
    });
  };

  const quantityIncrement = (productId) => {
    dispatch({
      type: "SET_INCREASE_PRODUCT_QUANTITY",
      payload: productId,
    });
  };

  const quantityDecrement = (productId) => {
    dispatch({
      type: "SET_DECREASE_PRODUCT_QUANTITY",
      payload: productId,
    });
  };

  // const promoCode = (product) => {
  //   dispatch({
  //     type: "SET_PROMO_CODE",
  //     payload: amount,
  //   });
  // };

  return (
    <GlobalContext.Provider
      value={{
        productList: state.productList,
        searchResult: state.searchResult,
        selectedCategory: state.selectedCategory,
        selectedMaterial: state.selectedMaterial,
        selectedRange: state.selectedRange,
        addProduct: state.addProduct,
        cart: state.cart,
        // searchText: state.searchText, // Include searchText in the context value

        setSelectedCategory,
        setSelectedMaterial,
        loadProductList,
        filterProduct,
        setSelectedRange,
        addToCart,
        setSearchText,
        deleteProductFromCart,
        quantityIncrement,
        quantityDecrement,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
