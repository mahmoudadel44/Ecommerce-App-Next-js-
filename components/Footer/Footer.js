import React from "react";

//Css
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
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
