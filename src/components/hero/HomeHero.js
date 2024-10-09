import React from "react";
import styles from "./HomeHero.module.css";

function HomeHero() {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.title}>
        <span>CRM</span> Dashboard
      </p>
      <p className={styles.subtitle}>Overview</p>
    </div>
  );
}

export default HomeHero;
