import React from "react";
import styles from "../../inputoutput.module.css";
import { Link } from "react-router-dom";
import showFile from "../../../../hooks/showFile.js";
import Textarea from "../../../Textarea/Textarea.js";

const InputDecryptVigenere = (props) => {
  return (
    <div className={styles.input}>
      <div className={styles.plaintomorse}>
        <h2 className={styles.plaintomorseText}>
          vigenere cipher <span className={styles.colorChangeBlue}>to</span>{" "}
          plain <span className={styles.colorChangeYellow}>text</span>
        </h2>
      </div>
      <h4 className={styles.inputText}>
        in<span className={styles.colorChangeYellow}>put:</span>
      </h4>
      <Textarea value={props.value} props={props}></Textarea>
      <div className={styles.invertLink}>
        <Link className={styles.invertLink} to='/plaintexttovigenere'>
          invert
        </Link>
      </div>
      <input
        type='file'
        onChange={(e) => showFile(e, props)}
        className={styles.i}
      />
    </div>
  );
};

export default InputDecryptVigenere;
