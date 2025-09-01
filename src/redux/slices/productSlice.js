// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: 'product',
//   initialState: { 
//     products: [],
//     product: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setProducts(state, action) {
//       state.products = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     setProduct(state, action) {
//       state.product = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     setLoading(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     setError(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//   },
// });

// export const { productActions } = productSlice.actions;
// export const productReducer = productSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: { 
    products: [],
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setProduct(state, action) {
      state.product = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

// ✅ التصدير الصحيح:
export const { setProducts, setProduct, setLoading, setError, clearError } = productSlice.actions;
export const productReducer = productSlice.reducer;