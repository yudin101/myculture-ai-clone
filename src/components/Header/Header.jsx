import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerMainDiv}>
          <a href="https://www.myculture.ai" className={styles.logoText}>
            <img src="/src/assets/myculture-logo.png" />
            <h2>MyCulture.ai</h2>
          </a>

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
