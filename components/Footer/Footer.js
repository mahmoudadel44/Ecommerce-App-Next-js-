import React from "react";
import Image from "next/image";

//Data
import SocialData from "./SocialData";

//Css
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className={`${styles.copyright} text-center`}>
                Copyright &copy; 2022 <span>Mahmoud Adel</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
