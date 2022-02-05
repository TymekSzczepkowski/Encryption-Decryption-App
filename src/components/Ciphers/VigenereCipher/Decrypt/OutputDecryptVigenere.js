import React from "react";
import styles from "../../inputoutput.module.css";

const OutputDecryptVigenere = (props) => {
  const crypto = require("text-cryptography");
  let vig = new crypto.Vigenere("keyword");
  return (
    <div className={styles.input}>
      <h4 className={styles.inputText}>
        <span className={styles.colorChangeYellow}> out</span>put:
      </h4>
      <div className={styles.outputValue}>
        <p>{vig.decrypt(props.value.toString())}</p>
      </div>
    </div>
  );
};

export default OutputDecryptVigenere;
