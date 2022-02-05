import styles from "../../inputoutput.module.css";
import { Link } from "react-router-dom";
import showFile from "../../../../hooks/showFile.js";
import Textarea from "../../../Textarea/Textarea.js";

function InputEncryptAffine(props) {

  return (
    <div className={styles.input}>
      <div className={styles.plaintomorse}>
        <h2 className={styles.plaintomorseText}>
          plain text <span className={styles.colorChangeBlue}>to</span> affine{" "}
          <span className={styles.colorChangeYellow}>cipher</span>
        </h2>
      </div>
      <h4 className={styles.inputText}>
        in<span className={styles.colorChangeYellow}>put:</span>
      </h4>
      <Textarea value={props.value} props={props}></Textarea>
      <div className={styles.invertLink}>
        <Link className={styles.invertLink} to='/affinetoplaintext'>
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
}
export default InputEncryptAffine;
