import React, { useEffect } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    console.log("main useEffect 실행");
    authService.onAuthChange((user) => {
      if (!user) history.push("/");
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={handleLogout} />
      <section className={styles.tmp}>hihi</section>
      <Footer />
    </section>
  );
};

export default Main;
