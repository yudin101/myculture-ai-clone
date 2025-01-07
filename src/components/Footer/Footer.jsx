import { useState } from "react";
import styles from "./Footer.module.css";
import Checkbox from "../Checkbox/Checkbox.jsx";

export default function Footer() {
  const [isVisisble, setIsVisible] = useState(false);

  return (
    <div className={styles.footer}>
      {isVisisble && (
        <>
          <div
            className={styles.csContainerBox}
            onClick={() => setIsVisible(!isVisisble)}
          >
            <div
              className={styles.cookieSettings}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.csBox}>
                <h2>Cookie Settings</h2>
                <p>
                  We use cookies to improve user experience. Choose what cookie
                  categories you allow us to use. You can read more about our
                  Cookie Policy by clicking on Cookie Policy below.
                </p>

								<Checkbox customClassName={styles.requiredCheckbox} title="Essential (required)" text="These cookies enable strictly necessary cookies for security, language support and verification of identity. These cookies can’t be disabled." disabled={true} defaultChecked={true} />
								<Checkbox title="Functionality" text="These cookies collect data to remember choices users make to improve and give a better user experience. Disabling can cause some parts of the site to not work properly." defaultChecked={true} />
								<Checkbox title="Performance & Analytics" text="These cookies help us to understand how visitors interact with our website, help us measure and analyze traffic to improve our service." defaultChecked={true} />
								<Checkbox title="Targeting & Advertising" text="These cookies help us to better deliver marketing content and customized ads." defaultChecked={true} />
              </div>

              <div className={styles.csBottom}>
                <a href="#">View Cookie Policy</a>
                <p onClick={() => setIsVisible(!isVisisble)}>Save</p>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.footerBranding}>
        <div className={styles.fbTop}>
          <img src="/myculture-ai-clone/myculture-logo.png" />
          <span>MyCulture</span>
        </div>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setIsVisible(!isVisisble)}
        >
          Cookie Settings
        </p>
      </div>

      <ul className={styles.footerLinksBox}>
        <li className={styles.flbLinksList}>
          <h4>Solutions</h4>
          <ul className={styles.flbLinks}>
            <li>
              <a href="https://happily.ai/">Happily.ai</a>
            </li>
            <li>
              <a href="https://myculture.ai/">MyCulture.ai</a>
            </li>
          </ul>
        </li>
        <li className={styles.flbLinksList}>
          <h4>Sitemap</h4>
          <ul className={styles.flbLinks}>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="https://www.myculture.ai/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.myculture.ai/terms-and-conditions">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.flbLinksList}>
          <h4>Toolbox</h4>
          <ul className={styles.flbLinks}>
            <li>
              <a href="https://myculture.ai/job-post-generator">
                Job Post Generator
              </a>
            </li>
            <li>
              <a href="https://myculture.ai/team-role-generator">
                Team Role Generator
              </a>
            </li>
            <li>
              <a href="https://myculture.ai/30-60-90-day-plan-generator">
                30/60/90-day Plan
              </a>
            </li>
            <li>
              <a href="https://myculture.ai/career-tracker-generator">
                OKR Generator
              </a>
            </li>
            <li>
              <a href="https://myculture.ai/career-tracker-generator">
                Career Tracker Generator
              </a>
            </li>
            <li>
              <a href="https://myculture.ai/performance-improvement-plan-generator">
                Performance Improvement Plan
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.flbLinksList}>
          <h4>Contact Us</h4>
          <ul className={styles.flbLinks}>
            <li>
              <a href="https://www.myculture.ai/contact-us">Submit a Form</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
