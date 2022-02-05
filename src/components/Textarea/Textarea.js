import styles from "./textarea.module.css";
import handleChange from "../../hooks/handleChange";

function Textarea(props) {
  return (
    <div className={styles.margin}>
      <textarea
        className={styles.textarea}
        value={props.value}
        onChange={(event) => handleChange(event, props.props)}
        placeholder='Type your message here'
      />
    </div>
  );
}
export default Textarea;
