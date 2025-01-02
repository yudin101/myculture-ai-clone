import styles from "./WorkingPoint.module.css";

export default function WorkingPoint({ title, text, img }) {
  return (
    <>
      <div className={styles.workingPoint}>
        <img src={img} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
