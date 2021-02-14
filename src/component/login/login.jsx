import React, { useEffect } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMain = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    const providerName = event.currentTarget.textContent;

    authService //
      .login(providerName)
      .then((data) => goToMain(data.user.uid))
      .catch(console.error);
  };

  useEffect(() => {
    console.log("login useEffect 실행");
    authService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
