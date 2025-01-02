import Header from "./components/Header/Header.jsx";
import Button1 from "./components/Button1/Button1.jsx";
import Card from "./components/Card/Card.jsx";
import FeatureCard from "./components/FeatureCard/FeatureCard.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <p className="banner-text">
        🎁 Special Offer: 80% OFF — $99/yr for Unlimited Access ($499) • Limited
        Time → <a href="https://app.myculture.app/signup">Claim Now</a>
      </p>
      <Header />

      <div className="above-footer-body">
        <div className="introBody">
          <div className="ib-top-text">
            <span className="top-text-first">Try now for free</span>
            <span className="top-text-second">No credit card required</span>
          </div>
          <div className="ib-content-box">
            <div className="cb-left">
              <p className="cbl-large-text">
                One Less Hiring Mistake, One More Perfect Fit.
              </p>
              <p className="cbl-small-text">
                Science-backed{" "}
                <span className="gradient-text">culture assessments</span>{" "}
                modeled to your culture & values to help identify red flags or
                secure the perfect match
              </p>
              <Button1
                text="Get Started →"
                href="https://app.myculture.app/signup"
              />
            </div>
            <div className="cb-right">
              <img src="/src/assets/intro-cbl-right.png" />
            </div>
          </div>
        </div>

        <div className="pre-features">
          <h1 className="pf-heading-text">
            “The most <span className="gradient-text">insightful</span>{" "}
            interaction in the hiring and onboarding process.”
          </h1>

          <div className="pf-card-box">
            <Card
              img="/src/assets/pre-features/star.png"
              title="Hire the Right Talent"
              text="Evaluate candidates based on culture-fit and align on acceptable behaviors"
              buttonText="Get Started"
              href="https://app.myculture.ai/signup"
            />
            <Card
              img="/src/assets/pre-features/play.png"
              title="Onboard New Employees"
              text="Help newcomers understand and align with company values"
              buttonText="Get Started"
              href="https://app.myculture.ai/signup"
            />
            <Card
              img="/src/assets/pre-features/think.png"
              title="Meaningful Team-building"
              text="Initiate a data-driven conversation around culture, values, and work styles"
              buttonText="Get Started"
              href="https://app.myculture.ai/signup"
            />
          </div>
        </div>

        <div id="features" className="features-box">
          <div className="feature-head-text">
            <h1>Ready to Dive Deep?</h1>
            <h1>Uncover Values that Guide Behaviors</h1>
            <p>
              Culture assessments ensure a match between candidates and
              companies, whereas personality tests overlook key organizational
              compatibility factors.
            </p>
          </div>

          <div className="feature-card-box">
            <FeatureCard
              title="Tailored Assessments"
              text={
                "Our culture assessment tool is designed to be customized according to your organization's unique culture and values. By providing assessments tailored to your needs, we ensure an effective evaluation of a candidate's fit within your organization.\n\nOur assessments are grounded in organizational psychology and backed by years of research, ensuring accurate and meaningful insights."
              }
              img="/src/assets/feature-card-img/first.png"
            />
            <FeatureCard
              title="Data-Driven Hiring & Team Building"
              text={
                "With our culture assessment tool, you can quickly analyze the work styles and values of candidates, new hires, or existing team members.\n\nCreate assessments in just a few minutes and use the results to guide your hiring or team-building activities. Foster better communication, collaboration, and synergy among team members, resulting in a more effective and cohesive team."
              }
              img="/src/assets/feature-card-img/second.png"
            />
            <FeatureCard
              title="Secure, Confidential, and Hassle-Free"
              text={
                "We prioritize data privacy. All candidate responses are stored securely and treated with the utmost confidentiality.\n\nWith our easy-to-use platform, you can effortlessly set up, deliver, and analyze assessments, streamlining the hiring process and ensuring the protection of your candidate's information."
              }
              img="/src/assets/feature-card-img/third.png"
            />
            <FeatureCard
              title="Time-Saving Automation with Stunning Reports"
              text={
                "Our automated assessment tool generates instant, beautifully designed reports filled with actionable insights. Save hours of manual evaluation and reduce the risk of human bias.\n\nUse the reports to identify the best candidates, improve your interviews, and ultimately hire individuals who will contribute positively to your organization."
              }
              img="/src/assets/feature-card-img/fourth.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
