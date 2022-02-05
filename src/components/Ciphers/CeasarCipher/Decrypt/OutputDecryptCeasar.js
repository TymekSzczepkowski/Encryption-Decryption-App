import React from "react";
import styles from "../../inputoutput.module.css";
import { decrypt } from "caesar-shift";

const OutputDecryptCeasar = (props) => {
  return (
    <div className={styles.input}>
      <h4 className={styles.inputText}>
        <span className={styles.colorChangeYellow}> out</span>put:
      </h4>
      <div className={styles.outputValue}>
        <p>{decrypt(6, props.value.toString())}</p>
      </div>
    </div>
  );
};

export default OutputDecryptCeasar;
