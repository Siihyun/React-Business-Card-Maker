import React, { useEffect } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) history.push("/");
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={handleLogout} />
      <section className={styles.container}>
        <CardMaker />
        <CardPreview />
      </section>
      <Footer />
    </section>
  );
};

export default Main;
