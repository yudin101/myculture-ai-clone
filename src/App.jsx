import Header from "./components/Header/Header.jsx";
import Button1 from "./components/Button1/Button1.jsx";
import Card from "./components/Card/Card.jsx";
import FeatureCard from "./components/FeatureCard/FeatureCard.jsx";
import WorkingPoint from "./components/WorkingPoint/WorkingPoint.jsx";
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
							img="/src/assets/pre-features-img/star.png"
							title="Hire the Right Talent"
							text="Evaluate candidates based on culture-fit and align on acceptable behaviors"
							buttonText="Get Started"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/pre-features-img/play.png"
							title="Onboard New Employees"
							text="Help newcomers understand and align with company values"
							buttonText="Get Started"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/pre-features-img/think.png"
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

				<div id="how-it-works" className="how-it-works">
					<div className="hiw-left">
						<h1>How it works</h1>
						<p>You're just a few steps away from culture alignment</p>
						<Button1
							text="Get Started →"
							href="https://app.myculture.app/signup"
						/>
					</div>
					<div className="hiw-right">
						<WorkingPoint
							title="Create an Assessment"
							text="Select sections you want to include in your culture assessment."
							img="/src/assets/how-it-works-img/01.png"
						/>
						<WorkingPoint
							title="Set up your values"
							text="Configure your values and other variables based on your company culture."
							img="/src/assets/how-it-works-img/02.png"
						/>
						<WorkingPoint
							title="Send out invites"
							text="Share to anyone quickly and easily via a private link or email."
							img="/src/assets/how-it-works-img/03.png"
						/>
						<WorkingPoint
							title="Get the results"
							text="View each candidate's results as a report card. Optionally, share results with them too."
							img="/src/assets/how-it-works-img/04.png"
						/>
					</div>
				</div>

				<div id="assessments" className="assessments">
					<div className="assessments-head-text">
						<h1>Assessment Library</h1>
						<p>
							Build your assessment in minutes by adding any combination of the
							following sections:
						</p>
					</div>

					<div className="assessments-card-box">
						<Card
							img="/src/assets/assessments-img/yellow.png"
							title="Values Alignment"
							text="Values determine behavior. When personal values are aligned with company core values, work is easy and natural. This is foundational to understanding culture fit."
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/assessments-img/meter.png"
							title="Culture Profile"
							text="Organizational culture is driven by competing values. Identify and match culture profiles based on Collaborate, Create, Compete, and Control across six dimensions of work. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/assessments-img/yellow.png"
							title="Human Skills"
							text="Human skills (soft skills) —written communication, empathy, situational awareness, and critical thinking are essential for developing successful relationships and sound reasoning and decision-making. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/assessments-img/check.png"
							title="Acceptable Behaviors"
							text="Behaviors are considered toxic when they don’t align with what’s expected. Understand behaviors that are acceptable, discouraged, or not-tolerated and identify mismatches. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/assessments-img/red.png"
							title="Work Style Identifier"
							text="Identify a candidate’s work style based on the 3P framework. Product, Process, or People. Understanding the inclination for each work style provides insight into how work is completed and prioritized. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/assessments-img/meter.png"
							title="Logic Test"
							text="Logical reasoning is key to problem-solving and decision-making. This test gauges an ability to decipher patterns, draw logical conclusions, and tackle complex problems. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
					</div>
				</div>

				<div className="compare">
					<div className="compare-head-text">
						<h1>Quickly and easily compare candidates</h1>
						<p>
							We've made it easy for you to view and compare results, whether
							you want to study a group of candidates or a team
						</p>
					</div>

					<div className="compare-card-box">
						<Card
							img="/src/assets/assessments-img/yellow.png"
							title="Dashboards"
							text="Ready-to-go visualizations that are updated with each candidate response"
							buttonText="Try for free"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/compare-img/presentation.png"
							title="Presentation-ready"
							text="Share the cohort analysis with your team to collectivity identify gaps and opportunities. Align as a team."
							buttonText="Try for free"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/src/assets/compare-img/views.png"
							title="Detailed views"
							text="Expand on each item to get deeper insights into scores and quickly identify respondents who are a good fit for your culture."
							buttonText="Try for free"
							href="https://app.myculture.ai/signup"
						/>
					</div>
				</div>

				<div className="toolbox">
					<div className="toolbox-head-text">
						<h1>A Toolbox for HR and People Managers</h1>
						<p>
							Access to AI tools that help you manage hiring, onboarding, and
							team performance.
						</p>
					</div>

					<div className="toolbox-card-box">
						<Card
							img="/src/assets/toolbox-img/post.svg"
							title="Job Post Generator"
							text="Autocraft detailed and effective job posts"
							buttonText="More info"
							href="htttps://myculture.ai/job-post-generator"
						/>
						<Card
							img="/src/assets/toolbox-img/team.svg"
							title="Team Role Generator"
							text="Define roles, behaviors, and promotion paths"
							buttonText="More info"
							href="htttps://myculture.ai/team-role-generator"
						/>
						<Card
							img="/src/assets/toolbox-img/plan.svg"
							title="30/60/90-day Plan"
							text="Structured 30/60/90-day integration plan"
							buttonText="More info"
							href="htttps://myculture.ai/30-60-90-day-plan-generator"
						/>
						<Card
							img="/src/assets/toolbox-img/track.svg"
							title="OKR Generator"
							text="Set and track clear objectives and results"
							buttonText="More info"
							href="htttps://myculture.ai/okr-generator"
						/>
						<Card
							img="/src/assets/toolbox-img/arrow.svg"
							title="Career Tracker Generator"
							text="Visualize and guide team member growth"
							buttonText="More info"
							href="htttps://myculture.ai/career-tracker-generator"
						/>
						<Card
							img="/src/assets/toolbox-img/graph.svg"
							title="Performance Improvement Plan"
							text="Structured plan for performance enhancement"
							buttonText="More info"
							href="htttps://myculture.ai/performance-improvement-plan-generator"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
