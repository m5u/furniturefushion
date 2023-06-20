import { useNavigate } from "react-router-dom";
const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
      };

    // case "SET_PRODUCT_FILTER":
    //   debugger;
    //   const selectedCategory = action.payload;
    //   const filterProducts = state.productList.filter((product) => {
    //     return selectedCategory.includes(product.category);
    //   });
    //   return {
    //     ...state,
    //     searchResult: filterProducts,
    //   };
    case "SET_PRODUCT_FILTER":
      const filteredItems = action.payload;
      let filterProducts = state.productList;
      if (filteredItems.category && filteredItems.category.length > 0) {
        filterProducts = filterProducts.filter((product) =>
          filteredItems.category.includes(product.category)
        );
      }

      if (filteredItems.material && filteredItems.material.length > 0) {
        filterProducts = filterProducts.filter((product) => {
          //debugger;
          const materials = product.material.toLocaleLowerCase().split(", ");
          return filteredItems.material.some((m) => materials.includes(m));
        });
      }
      if (filteredItems.price && filteredItems.price.length > 0) {
        filterProducts = filterProducts.filter((product) => {
          const price = parseFloat(product.price);

          // Handle "1000-above" range
          if (filteredItems.price.includes("1000-above")) {
            return price >= 1000;
          }

          return filteredItems.price.some((range) => {
            const [min, max] = range.split("-").map(parseFloat);
            return price >= min && price <= max;
          });
        });
      }

      return {
        ...state,
        searchResult: filterProducts,
      };
    case "SET_CATEGORY_CHECK":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "SET_MATERIAL_CHECK":
      return {
        ...state,
        selectedMaterial: action.payload,
      };
    case "SET_RANGE_CHECK":
      return {
        ...state,
        selectedRange: action.payload,
      };
    case "SET_SEARCH_PRODUCT":
      //debugger;
      const filterProductList = state.productList.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        searchResult: filterProductList,
      };
    case "SET_ADD_PRODUCT_IN_CART":
      debugger;
      const existingCartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingCartItem) {
        debugger;
        const updateCartList = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            debugger;
            return {
              ...cartItem,
              quantity: cartItem.quantity + action.payload.quantity,
            };
          } else {
            return cartItem;
          }
        });

        return {
          ...state,
          cart: updateCartList,
        };
      } else {
        debugger;
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case "SET_INCREASE_PRODUCT_QUANTITY":
      const increaseQuantity = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return {
            ...product,
            quantity: product.quantity,
          };
        }
      });
      return {
        ...state,
        cart: increaseQuantity,
      };
    case "SET_DECREASE_PRODUCT_QUANTITY":
      const decreaseQuanity = state.cart.map((product) => {
        debugger;
        if (product.id === action.payload && product.quantity > 1) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          debugger;
          return {
            ...product,
            quantity: product.quantity,
          };
        }
      });
      return { ...state, cart: decreaseQuanity };

    case "SET_DELETE_PRODUCT_FROM_CART":
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    default:
      return state;
  }
};

export default AppReducer;
