import styles from "./Checkbox.module.css";

export default function Checkbox({
	customClassName,
  title,
  text,
  defaultChecked = false,
  disabled = false,
}) {
  return (
    <label className={`${styles.checkboxLabel} ${customClassName}`}>
      <input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
      <div className={styles.labelDiv}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </label>
  );
}
