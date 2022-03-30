import React from "react";
import Image from "next/image"
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

//Css
import styles from "../../styles/Carousel.module.css";

const MainCarousel = () => {
  const Products = useSelector((state) => state.Products.products);

  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        {Products &&
          Products.map((product, index) => (
            <Carousel.Item interval={1500} key={index}>
              <div className={styles.carouselImageContainer}>
                <Image
                  src={product?.image}
                  key={product.image}
                  alt="Image One"
                  className={styles.carouselImage}
                  layout="fill"
                />
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
