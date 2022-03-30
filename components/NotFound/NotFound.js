import React from "react";
import Link from "next/link";
import Image from "next/image";

//images
import NotFoundImg from "../../assets/imgs/notFoundImg.jpg";

//Css
import styles from "../../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.imgContainer}>
        <Image
          src={NotFoundImg}
          alt="notfoundimg"
          layout="fill"
          className={styles.notFoundImg}
        />
      </div>
      <Link href={"/"}>Go To Home</Link>
    </div>
  );
};

export default NotFound;
