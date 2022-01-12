import React from "react";
import styles from './Header.module.css';

function Navbar({ title }: any) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular {title}</h2>
    </div>
  );
}
export default Navbar;