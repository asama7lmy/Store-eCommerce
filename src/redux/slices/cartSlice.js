import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
 initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // إذا المنتج موجود، زيادة الكمية
        state.cartItems = state.cartItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // إذا المنتج غير موجود، إضافته جديد
        state.cartItems = [...state.cartItems, newItem];
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
    },
    clearCart(state) {
      state.cartItems = [];
    }
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;