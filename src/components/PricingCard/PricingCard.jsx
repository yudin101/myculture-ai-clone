import styles from "./PricingCard.module.css";
import Button1 from "../Button1/Button1.jsx";

export default function PricingCard({ plan, text, price, duration, pointText, points, children, customClass }) {
	return (
		<>
			<div className={`${styles.pricingCard} ${customClass}`}>
				<h2>{plan}</h2>
				<p className={styles.text}>{text}</p>
				<h1>${price}<span>{duration}</span></h1>
				<Button1 text="Get Started" href="https://app.myculture.ai/signup" />
				<p className={styles.pointText}>{pointText}</p>
				{points.map((point, index) => (
					<p className={styles.points} key={index}>✔ {point}</p>
				))}
				{children}
			</div>
		</>
	)
}
