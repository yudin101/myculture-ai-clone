import React from "react";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({ title, text, img }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.fcText}>
        <h1>{title}</h1>
        <p>
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className={styles.fcImg}>
        <img src={img} />
      </div>
    </div>
  );
}
