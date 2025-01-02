import styles from "./Card.module.css";

export default function Card({ img, title, text, buttonText, href }) {
	return (
		<div className={styles.card}>
			<img src={img} />
			<h2>{title}</h2>
			<p>{text}</p>
			<a href={href}>{buttonText}</a>
		</div>
	);
}
