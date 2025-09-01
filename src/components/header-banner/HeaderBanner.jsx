// import "./header-banner.css";

// const HeaderBanner = () => {
//   return (
//     <div className="header-banner">
//       <img
//         className="header-banner-img"
//         src="/images/banners/shoes.png"
//         alt=""
//       />
//       <img
//         className="header-banner-img"
//         src="/images/banners/house.png"
//         alt=""
//       />
//     </div>
//   );
// };


// export default HeaderBanner;



import "./header-banner.css";

const HeaderBanner = () => {
  return (
    <div className="header-banner">
      <img
        className="header-banner-img"
        src={process.env.PUBLIC_URL + "/images/banners/shoes.png"}
        alt="shoes banner"
      />
      <img
        className="header-banner-img"
        src={process.env.PUBLIC_URL + "/images/banners/house.png"}
        alt="house banner"
      />
    </div>
  );
};

export default HeaderBanner;