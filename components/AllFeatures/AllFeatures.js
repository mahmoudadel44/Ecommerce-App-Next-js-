import React from "react";
import Link from "next/link";
import Image from "next/image";

//Data
import AllFeaturesData from "./AllFeaturesData";

//Css
import styles from "../../styles/AllSettings.module.css";

const AllFeatures = () => {
  return (
    <div className={`${styles.allSettings}`}>
      <div className="container">
        <div className="row">
          {AllFeaturesData &&
            AllFeaturesData.map((feature) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={feature.id}>
                <Link href="#" passHref>
                  <div className={`${styles.settings} p-2 mb-3`}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={feature?.img}
                        alt="settingimg"
                        className={styles.settingImg}
                        layout="fill"
                      />
                    </div>
                    <span>{feature.title}</span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllFeatures;
