import React from "react";
import Image from "next/image";
import Link from "next/link";

//Data
import AllTopSellingData from "./AllTopSellingData";

//Css
import styles from "../../styles/TopSelling.module.css";

import Marketting from "../../assets/imgs/marketing.gif"

const TopSelling = () => {
  return (
    <section className=" mb-3 mt-3">
      <div className={`${styles.needsRow} container py-2`}>
        <h5 className="my-2">Top selling items</h5>
        <div className="row">
          {AllTopSellingData &&
            AllTopSellingData?.map((topSell) => (
              <div className="col-lg-2 col-md-3 col-sm-12" key={topSell.id}>
                  <div className={`${styles.need} my-2`}>
                    <div className={styles.imgContainer}>
                      {topSell?.img && (
                        <Image
                          src={Marketting}
                          className={styles.image}
                          alt="topselling"
                          layout="fill"
                        />
                      )}
                    </div>
                    <span className={styles.title}>{topSell.title}</span>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
