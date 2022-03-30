import React from "react";

// //Data
import AllTopSellingData from "./AllTopSellingData";

// //Css
import styles from "../../styles/TopSelling.module.css";

const TopSelling = () => {
  return (
    <section className={`${styles.statistics} text-center`}>
      <div className={styles.data}>
        <div className="container">
          <h2 className="h1 mb-5 text-white">Our Main Statistics</h2>
          <div className="row">
            {AllTopSellingData &&
              AllTopSellingData?.map((topSell) => (
                <div className="col-md-3 col-sm-6" key={topSell.id}>
                  <div className={styles.stats}>
                    <i className={`${topSell.category} fa-5x text-white`}></i>
                    <p className="text-white">{topSell.count}</p>
                    <span className="text-white">{topSell.title}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
