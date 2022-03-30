import React from "react";
import Link from "next/link";
import Image from "next/image";

//Data
import AllSettingsData from "./AllSettingsData";

//Css
import styles from "../../styles/AllSettings.module.css";

const AllSettings = () => {
  return (
    <div className={`${styles.allSettings}`}>
      <div className="container">
        <div className="row">
          {AllSettingsData &&
            AllSettingsData.map((data) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={data.id}>
                <Link href="#" passHref>
                  <div className={`${styles.settings} p-2 mb-3`}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={data?.img}
                        alt="settingimg"
                        className={styles.settingImg}
                        layout="fill"
                      />
                    </div>
                    <span>{data.title}</span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllSettings;
