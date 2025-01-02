import styles from './Button1.module.css'

export default function Button({ text, href }) {
	return (
		<>
			<a className={styles.button} href={href}>
				{text}
			</a>
		</>
	)
}
