// // ✅ استيراد الـ actions بشكل منفرد
// import { addItemToCart, removeItemFromCart } from "../slices/cartSlice";

// // Add Item To Cart
// export function addToCart(newItem) {
//   return (dispatch) => {
//     dispatch(addItemToCart(newItem)); // ✅ استخدام مباشر
//   };
// }

// // Remove Item From Cart
// export function removeFromCart(id) {
//   return (dispatch) => {
//     dispatch(removeItemFromCart(id)); // ✅ استخدام مباشر
//   };
// }

import { addItemToCart, removeItemFromCart } from "../slices/cartSlice";

// Add Item To Cart
export function addToCart(newItem) {
  return (dispatch, getState) => {
    try {
      dispatch(addItemToCart(newItem));
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
}

// Remove Item From Cart
export function removeFromCart(id) {
  return (dispatch, getState) => {
    try {
      dispatch(removeItemFromCart(id));
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
}