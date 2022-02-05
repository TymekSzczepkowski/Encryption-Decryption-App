import React from "react";
import styles from "../../inputoutput.module.css";
import { encode } from "morsee";

const OutputEncrypt = (props) => {
  return (
    <div className={styles.input}>
      <h4 className={styles.inputText}>
        <span className={styles.colorChangeYellow}> out</span>put:
      </h4>
      <div className={styles.outputValue}>
        <p>{encode(props.value)}</p>
      </div>
    </div>
  );
};

export default OutputEncrypt;
