

// import { setProducts, setProduct, setLoading, setError, clearError } from "../slices/productSlice";

// // Fetch Products
// export function fetchProducts() {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoading());
//       dispatch(clearError()); // ✅ إضافة clearError هنا
      
//       const response = await fetch("https://my-json-server.typicode.com/asama7lmy/fake-api/products");
//       // https://my-json-server.typicode.com/asama7lmy/fake-api/products
//       // https://my-json-server.typicode.com/asama7lmy/fake-api/products

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       dispatch(setProducts(data));
//       console.log(data)
//     } catch (error) {
//       dispatch(setError(error.message));
//       console.error("Error fetching products:", error);
//     }
//   };
// }

// // Fetch Single Product By Id
// export function fetchSingleProduct(productId) {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoading());
//       dispatch(clearError()); // ✅ إضافة clearError هنا
      
//       const response = await fetch(`https://my-json-server.typicode.com/asama7lmy/fake-api/products/${productId}`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       dispatch(setProduct(data));
//       console.log(data)
//     } catch (error) {
//       dispatch(setError(error.message));
//       console.error("Error fetching single product:", error);
//     }
//   };
// }

import { setProducts, setProduct, setLoading, setError, clearError } from "../slices/productSlice";
import { getImageUrl } from "../../utils/getImageUrl";

// ✅ Fetch Products
export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      dispatch(clearError());

      const response = await fetch("https://my-json-server.typicode.com/asama7lmy/fake-api/products");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      let data = await response.json();

      // ✅ معالجة روابط الصور قبل التخزين
      data = data.map((item) => ({
        ...item,
        image: getImageUrl(item.image),
      }));

      dispatch(setProducts(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}

// ✅ Fetch Single Product By Id
export function fetchSingleProduct(productId) {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      dispatch(clearError());

      const response = await fetch(`https://my-json-server.typicode.com/asama7lmy/fake-api/products/${productId}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      let data = await response.json();

      // ✅ معالجة رابط الصورة
      data = { ...data, image: getImageUrl(data.image) };

      dispatch(setProduct(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}
