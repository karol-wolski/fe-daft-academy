import React from "react";
import ReactLoading from "react-loading";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles["loading-background"]}>
      <ReactLoading type="spin" className={styles["loading-icon"]} />
    </div>
  );
};

export default Loader;
