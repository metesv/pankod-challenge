import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h2 className={styles.title}>DemoStreaming</h2>
      </Link>
    </div>
  );
}
export default Navbar;