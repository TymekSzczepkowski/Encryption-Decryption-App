import { Link } from "react-router-dom";
import React from "react";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/PlainTextToMorseCode"}>morse code</Link>
        </li>
        <li>
          <Link to={"/plaintextoaffine"}>affine cipher</Link>
        </li>
        <li>
          <Link to={"/plaintexttoceasar"}>caesar cipher</Link>
        </li>
        <li>
          <Link to={"/plaintexttovigenere"}>vigenere cipher</Link>
        </li>
        <li className={`${styles.logo} ${styles.active}`}>
          <Link to={"/"} className={styles.logotext}>
            home
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
