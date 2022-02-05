import React from "react";
import styles from "../../inputoutput.module.css";

const OutputDecryptAffine = (props) => {
  const crypto = require("text-cryptography");
  let affine =  new crypto.Affine(3,  5);
  return (
    <div className={styles.input}>
      <h4 className={styles.inputText}>
        <span className={styles.colorChangeYellow}> out</span>put:
      </h4>
      <div className={styles.outputValue}>
        <p>{affine.decrypt(props.value.toString())}</p>
      </div>
    </div>
  );
};

export default OutputDecryptAffine;
