import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <div className={styles.header}>
    <img src="/images/logo.png" alt="business card maker" />
    <h1 className={styles.title}>Business Card Maker</h1>
  </div>
);

export default Header;
