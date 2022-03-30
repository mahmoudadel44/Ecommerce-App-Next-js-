// import React, { useEffect } from "react";
// import Image from "next/image";

// import { useDispatch, useSelector } from "react-redux";
// import { getCategories } from "../../redux/actions/ProductActions";

// //Css
// import styles from "../../styles/Tabs.module.css";

// const Tabs = () => {
//   const products = useSelector((state) => state.Products.products);

//   const dispatch = useDispatch();

//   const mens = products.filter((p) => p.category == "men's clothing");
//   const womens = products.filter((p) => p.category == "women's clothing");
//   const jeweleryes = products.filter((p) => p.category.includes("jewel"));
//   const electronics = products.filter((p) => p.category.includes("elect"));

//   useEffect(() => {
//     dispatch(getCategories());
//   }, []);
//   return (
//     <>
//       <ul
//         className="nav nav-pills d-flex justify-content-center"
//         id="pills-tab"
//         role="tablist"
//       >
//         <li className="nav-item mb-3 mb-3 ms-3" role="presentation">
//           <button
//             className={`${styles.cutom} nav-link bg-success text-white active`}
//             id="pills-mens-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-mens"
//             type="button"
//             role="tab"
//             aria-controls="pills-mens"
//             aria-selected="true"
//           >
//             Mens' Clothing
//           </button>
//         </li>
//         <li className="nav-item mb-3 mb-3 ms-3" role="presentation">
//           <button
//             className={`${styles.cutom} nav-link bg-success text-white`}
//             id="pills-Womens-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-Womens"
//             type="button"
//             role="tab"
//             aria-controls="pills-Womens"
//             aria-selected="true"
//           >
//             women's clothing
//           </button>
//         </li>

//         <li className="nav-item mb-3 mb-3 ms-3" role="presentation">
//           <button
//             className={`${styles.cutom} nav-link bg-success text-white`}
//             id="pills-jewelery-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-jewelery"
//             type="button"
//             role="tab"
//             aria-controls="pills-jewelery"
//             aria-selected="false"
//           >
//             jewelery
//           </button>
//         </li>
//         <li className="nav-item mb-3 mb-3 ms-3" role="presentation">
//           <button
//             className={`${styles.cutom} nav-link bg-success text-white`}
//             id="pills-electronics-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-electronics"
//             type="button"
//             role="tab"
//             aria-controls="pills-electronics"
//             aria-selected="false"
//           >
//             Electronics
//           </button>
//         </li>
//       </ul>
//       <div className="tab-content mt-5" id="pills-tabContent">
//         <div
//           className="tab-pane fade show active"
//           id="pills-mens"
//           role="tabpanel"
//           aria-labelledby="pills-mens-tab"
//         >
//           <div className={`my-5 d-flex justify-content-between`}>
//             {mens &&
//               mens.map((men) => (
//                 <div key={men.image} className={styles.imgTabContainer}>
//                   <Image
//                     src={men.image}
//                     className={styles.tabImg}
//                     layout="fill"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>

//         <div
//           className="tab-pane fade"
//           id="pills-Womens"
//           role="tabpanel"
//           aria-labelledby="pills-Womens-tab"
//         >
//           <div className="my-5 d-flex justify-content-between">
//             {womens &&
//               womens.map((women) => (
//                 <div key={women.image} className={styles.imgTabContainer}>
//                   <Image
//                     src={women.image}
//                     className={styles.tabImg}
//                     layout="fill"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>

//         <div
//           className="tab-pane fade"
//           id="pills-jewelery"
//           role="tabpanel"
//           aria-labelledby="pills-jewelery-tab"
//         >
//           <div className="my-5 d-flex justify-content-between">
//             {jeweleryes &&
//               jeweleryes.map((jewelery) => (
//                 <div key={jewelery.image} className={styles.imgTabContainer}>
//                   <Image
//                     src={jewelery.image}
//                     className={styles.tabImg}
//                     layout="fill"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>
//         <div
//           className="tab-pane fade"
//           id="pills-electronics"
//           role="tabpanel"
//           aria-labelledby="pills-electronics-tab"
//         >
//           <div className="my-5 d-flex justify-content-between">
//             {electronics &&
//               electronics.map((electronic) => (
//                 <div key={electronic.image} className={styles.imgTabContainer}>
//                   <Image
//                     src={electronic.image}
//                     className={styles.tabImg}
//                     layout="fill"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tabs;

import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/ProductActions";

//Css
import styles from "../../styles/Tabs.module.css";

const Tabs = () => {
  const products = useSelector((state) => state.Products.products);

  const dispatch = useDispatch();

  const mens = products.filter((p) => p.category == "men's clothing");
  const womens = products.filter((p) => p.category == "women's clothing");
  const jeweleryes = products.filter((p) => p.category.includes("jewel"));
  const electronics = products.filter((p) => p.category.includes("elect"));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <ul
        className={`${styles.tabNav} nav nav-pills d-flex justify-content-center`}
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item mb-3 ms-3" role="presentation">
          <button
            className={`${styles.cutom} nav-link bg-success text-white active`}
            id="pills-mens-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-mens"
            type="button"
            role="tab"
            aria-controls="pills-mens"
            aria-selected="true"
          >
            Mens&apos;Clothing
          </button>
        </li>
        <li className="nav-item mb-3 ms-3" role="presentation">
          <button
            className={`${styles.cutom} nav-link bg-success text-white`}
            id="pills-Womens-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Womens"
            type="button"
            role="tab"
            aria-controls="pills-Womens"
            aria-selected="true"
          >
            women&apos;s clothing
          </button>
        </li>

        <li className="nav-item mb-3 ms-3" role="presentation">
          <button
            className={`${styles.cutom} nav-link bg-success text-white`}
            id="pills-jewelery-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-jewelery"
            type="button"
            role="tab"
            aria-controls="pills-jewelery"
            aria-selected="false"
          >
            jewelery
          </button>
        </li>
        <li className="nav-item mb-3 ms-3" role="presentation">
          <button
            className={`${styles.cutom} nav-link bg-success text-white`}
            id="pills-electronics-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-electronics"
            type="button"
            role="tab"
            aria-controls="pills-electronics"
            aria-selected="false"
          >
            Electronics
          </button>
        </li>
      </ul>
      <div className="tab-content mt-5" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-mens"
          role="tabpanel"
          aria-labelledby="pills-mens-tab"
        >
          <div
            className={`${styles.imagesContainer} d-flex justify-content-between`}
          >
            {mens &&
              mens.map((men) => (
                <div key={men.image} className={styles.imgTabContainer}>
                  <Image
                    src={men.image}
                    className={styles.tabImg}
                    layout="fill"
                    alt="tabImg"
                  />
                </div>
              ))}
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-Womens"
          role="tabpanel"
          aria-labelledby="pills-Womens-tab"
        >
          <div
            className={`${styles.imagesContainer} d-flex justify-content-between`}
          >
            {womens &&
              womens.map((women) => (
                <div key={women.image} className={styles.imgTabContainer}>
                  <Image
                    src={women.image}
                    className={styles.tabImg}
                    layout="fill"
                    alt="tabImg"
                  />
                </div>
              ))}
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-jewelery"
          role="tabpanel"
          aria-labelledby="pills-jewelery-tab"
        >
          <div
            className={`${styles.imagesContainer} d-flex justify-content-between`}
          >
            {jeweleryes &&
              jeweleryes.map((jewelery) => (
                <div key={jewelery.image} className={styles.imgTabContainer}>
                  <Image
                    src={jewelery.image}
                    className={styles.tabImg}
                    layout="fill"
                    alt="tabImg"
                  />
                </div>
              ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-electronics"
          role="tabpanel"
          aria-labelledby="pills-electronics-tab"
        >
          <div
            className={`${styles.imagesContainer} d-flex justify-content-between`}
          >
            {electronics &&
              electronics.map((electronic) => (
                <div key={electronic.image} className={styles.imgTabContainer}>
                  <Image
                    src={electronic.image}
                    className={styles.tabImg}
                    layout="fill"
                    alt="tabImg"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
