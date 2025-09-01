
// import "./cart.css";
// const cartItems = [
//   {
//     id: 1,
//     quantity: 2,
//     price: 10,
//     title: "هاتف سامسونج",
//     image: "/images/products/mobiles/m1.jpg"
//   },
//   {
//     id: 2,
//     quantity: 1,
//     price: 5,
//     title: "هاتف سامسونج",
//     image: "/images/products/mobiles/m2.jpg"
//   }
// ];

// const Cart = () => {
//   // حساب المجموع الكلي
//   const total = cartItems.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);

//   return (
//     <div className="cart">
//       <h1 className="cart-title">عربة التسوق</h1>
//       <div className="cart-wrapper">
//         {cartItems.map(item => (
//           <div className="cart-item" key={item.id}>
//             <div className="cart-item-img-wrapper">
//               <img 
//                 src={item.image} 
//                 alt={item.title} 
//                 className="cart-item-img" 
//               />
//             </div>
//             <div className="cart-item-info">
//               <div className="cart-item-title">{item.title}</div>
//               <div className="cart-item-quantity">
//                 الكميه: <span>{item.quantity}</span>
//               </div>
//               <div className="cart-item-price">
//                 السعر: <span>${item.price * item.quantity}</span>
//               </div>
//               <i className="bi bi-trash cart-item-delete-icon"></i>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="cart-summary">
//         <div className="cart-summary-text">
//           <i className="bi bi-check-circle-fill"></i>
//           جزء من طلبك مؤهل للشحن المجاني. قم بتحديد هذا الخيار عند الدفع التفاصيل
//         </div>
//         <div className="cart-summary-total">
//           المجموع: <span>${total}</span>
//         </div>
//         <button className="cart-summary-btn">
//           تابع عمليات الشراء
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom"

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return cartItems.length < 1 ? (
    <div className="empty-cart">
        <h1>سله التسوق الخاصه بك فارغه</h1>
        <p>لا یوجد سلع</p>
        <Link className="empty-cart-link" to="/products">
            صفحه السلع
        </Link>
    </div>
  ) : (
    <>
      <section className="cart">
        <h1 className="cart-title">سله التسوق</h1>
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img-wrapper">
                  <img
                    className="cart-item-img"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-quantity">
                    الکمیه:
                    <span>{item.quantity}</span>
                  </div>
                  <div className="cart-item-price">
                    السعر:
                    <span>{(item.price * item.quantity).toFixed(2)}$ </span>
                  </div>
                  <i
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bi bi-trash fill cart-item-delete-icon"
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-text">
              <i className="bi bi-check-circle-fill"></i>
              جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
              التفاصیل
            </div>
            <div className="cart-summary-total">
              المجموع:
              <span>
                {cartItems
                  .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                  .toFixed(2)}
                $
              </span>
            </div>
            <button className="cart-summary-btn">تابع عملیات الشراء</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
