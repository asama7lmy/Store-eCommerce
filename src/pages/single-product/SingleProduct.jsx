

// import { useParams } from "react-router-dom";
// import Rating from "../../components/rating/Rating";
// import "./single-product.css";
// import ProductDescription from "./ProductDescription";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchSingleProduct } from "../../redux/apiCalls/productApiCall";
// import { useEffect, useState } from "react";
// import Spinner from "../../components/spinner/Spinner";
// import { addToCart } from "../../redux/apiCalls/cartApiCall";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { product, loading, error } = useSelector((state) => state.product);
//  const [quantity, setQuantity] = useState("");
//   useEffect(() => {
//     dispatch(fetchSingleProduct(id));
//   }, [id, dispatch]);

//   // ✅ التحقق من الحالات المختلفة
//   if (loading) return <Spinner />;
//   if (error) return <div>Error: {error}</div>;
//   if (!product) return <Spinner />;
// const addToCartHandler = () => {
//     dispatch(
//       addToCart({
//         id: product?.id,
//         quantity: quantity,
//         price: product?.price,
//         title: product?.title,
//         image: product?.image,
//       })
//     );
//   };
//   // ✅ الآن product موجود بالتأكيد
//   const fullImageUrl = `${process.env.PUBLIC_URL}${product.image}`;

//   return (
//     <div className="single-product">
//       <div className="product-wrapper">
//         <div className="product-image-wrapper">
//           <img src={fullImageUrl} alt={product.title} />
//         </div>
//         <div className="product-info">
//           <h1 className="product-title">{product.title}</h1>
//           <Rating rating={product.rating} reviews={product.reviews} />
//           <div className="product-price">${product.price}</div>
//           <div className="product-add-to-cart">
//             <div>الکمیه</div>
//             <input
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               type="number"
//               min="1"
//               max="10"
//             />
//             <button onClick={addToCartHandler}  className="add-to-cart-btn">
//               إضافه الی سله التسوق
//             </button>
//           </div>
//         </div>
//       </div>
//       <ProductDescription />
//     </div>
//   );
// };

// export default SingleProduct;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "../../components/rating/Rating";
import "./single-product.css";
import ProductDescription from "./ProductDescription";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../../redux/apiCalls/productApiCall";
import Spinner from "../../components/spinner/Spinner";
import { addToCart } from "../../redux/apiCalls/cartApiCall";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    window.scrollTo(0,0)
  }, [id, dispatch]);

  // Add To Cart Handler
  const addToCartHandler = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          quantity: quantity,
          price: product.price,
          title: product.title,
          image: product.image,
        })
      );
    }
  };

  // التحقق من الحالات المختلفة
  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <Spinner />;

  // المسار الكامل للصورة
  const fullImageUrl = `${process.env.PUBLIC_URL}${product.image}`;

  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={fullImageUrl} alt={product.title} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <Rating rating={product.rating} reviews={product.reviews} />
          <div className="product-price">${product.price}</div>
          <div className="product-add-to-cart">
            <div>الکمیه</div>
            <input
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              type="number"
              min="1"
              max="10"
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              إضافه الی سله التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
};

export default SingleProduct;