import React from "react";

//Css
import styles from "../../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <ul className={styles.loader}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Spinner;
