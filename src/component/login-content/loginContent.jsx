import React from "react";
import styles from "./loginContent.module.css";

const LoginContent = (props) => {
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <button className={styles.loginButton}>Google</button>
      <button className={styles.loginButton}>Github</button>
    </div>
  );
};

export default LoginContent;
