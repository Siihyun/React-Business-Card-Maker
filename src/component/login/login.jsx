import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import LoginContent from "../login-content/loginContent";
import styles from "./login.module.css";

const Login = (props) => (
  <div className={styles.loginWrapper}>
    <Header></Header>
    <LoginContent></LoginContent>
    <Footer></Footer>
  </div>
);

export default Login;
