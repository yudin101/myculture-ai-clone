import styles from "./ResourceCard.module.css";

export default function ResourceCard({ img, href, title, text }) {
	return (
		<>
			<a href={href} className={styles.resCard} target="_blank">
				<img src={img} />
				<div className={styles.rcBottomDiv}>
					<h3>{title}</h3>
					<p>{text}</p>
				</div>
			</a>
		</>
	);
}
