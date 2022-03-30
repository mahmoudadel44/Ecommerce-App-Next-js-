// import React from "react";
// import Image from "next/image";

// import { Carousel } from "react-bootstrap";
// import { useSelector } from "react-redux";

// //Css
// import styles from "../../styles/Carousel.module.css";

// const Carousel = () => {
//   const Products = useSelector((state) => state.Products.filteredItems);

//   return (
//     <div className={styles.carouselContainer}>
//       <Carousel>
//         {Products &&
//           Products.map((product, index) => (
//             <Carousel.Item interval={1500} key={index}>
//               <div className={styles.imageContainer}>
//                 <Image
//                   className={styles.carouselImage}
//                   src={product?.image}
//                   key={product.image}
//                   alt="Image One"
//                   layout="fill"
//                 />
//               </div>
//             </Carousel.Item>
//           ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Carousel;

import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

import styles from "../../styles/Carousel.module.css";
const MainCarousel = () => {
  const Products = useSelector((state) => state.Products.products);

  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        {Products &&
          Products.map((product, index) => (
            <Carousel.Item interval={1500} key={index}>
              <img
                src={product?.image}
                key={product.image}
                alt="Image One"
                className={styles.carouselImage}
                layout="fill"
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
