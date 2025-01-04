import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
	const [isLangVisible, setIsLangVisible] = useState(false);
	const [isSidebarActive, setIsSidebarActive] = useState(false);

	return (
		<>
			{isSidebarActive && (
				<div className={styles.sidebar}>
					<ul className={styles.sidebarNavLinkBox}>
						<li>
							<a
								onClick={() => setIsSidebarActive(!isSidebarActive)}
								className={styles.sidebarNavLink}
								href="#features"
							>
								Features
							</a>
						</li>
						<li>
							<a
								onClick={() => setIsSidebarActive(!isSidebarActive)}
								className={styles.sidebarNavLink}
								href="#how-it-works"
							>
								How it works
							</a>
						</li>
						<li>
							<a
								onClick={() => setIsSidebarActive(!isSidebarActive)}
								className={styles.sidebarNavLink}
								href="#assessments"
							>
								Assessments
							</a>
						</li>
						<li>
							<a
								onClick={() => setIsSidebarActive(!isSidebarActive)}
								className={styles.sidebarNavLink}
								href="#pricing"
							>
								Pricing
							</a>
						</li>
						<li>
							<a
								className={styles.sidebarNavLink}
								href="https://blog.happily.ai"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								className={`${styles.sidebarButton} ${styles.navButton} ${styles.navButtonLogin}`}
								href="https://app.myculture.ai/login"
							>
								Login
							</a>
						</li>
						<li>
							<a
								className={`${styles.sidebarButton} ${styles.navButton} ${styles.navButtonRegister}`}
								href="https://app.myculture.ai/signup"
							>
								Sign up
							</a>
						</li>
					</ul>
				</div>
			)}

			<header className={styles.header}>
				<div className={styles.headerMainDiv}>
					{isLangVisible && (
						<div className={styles.dropdown}>
							<a href="https://www.myculture.ai/th">ไทย</a>
						</div>
					)}

					<a href="https://www.myculture.ai" className={styles.logoText}>
						<img src="/myculture-ai-clone/myculture-logo.png" />
						<h2>MyCulture.ai</h2>
					</a>

					<h3
						onClick={() => setIsSidebarActive(!isSidebarActive)}
						className={styles.hamburgerMenuIcon}
					>
						☰
					</h3>

					<ul className={styles.navLinkBox}>
						<li>
							<a className={styles.navLink} href="#features">
								Features
							</a>
						</li>
						<li>
							<a className={styles.navLink} href="#how-it-works">
								How it works
							</a>
						</li>
						<li>
							<a className={styles.navLink} href="#assessments">
								Assessments
							</a>
						</li>
						<li>
							<a className={styles.navLink} href="#pricing">
								Pricing
							</a>
						</li>
						<li>
							<a className={styles.navLink} href="https://blog.happily.ai">
								Blog
							</a>
						</li>
						<li onClick={() => setIsLangVisible(!isLangVisible)}>
							<span className={styles.navLink}>🌐 Eng ⌄</span>
						</li>
						<li>
							<a
								className={`${styles.navButton} ${styles.navButtonLogin}`}
								href="https://app.myculture.ai/login"
							>
								Login
							</a>
						</li>
						<li>
							<a
								className={`${styles.navButton} ${styles.navButtonRegister}`}
								href="https://app.myculture.ai/signup"
							>
								Sign up
							</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
