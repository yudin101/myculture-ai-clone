import Header from "./components/Header/Header.jsx";
import Button1 from "./components/Button1/Button1.jsx";
import Card from "./components/Card/Card.jsx";
import FeatureCard from "./components/FeatureCard/FeatureCard.jsx";
import WorkingPoint from "./components/WorkingPoint/WorkingPoint.jsx";
import PricingCard from "./components/PricingCard/PricingCard.jsx";
import ResourceCard from "./components/ResourceCard/ResourceCard.jsx";
import "./App.css";

export default function App() {
	return (
		<>
			<p className="banner-text">
				🎁 Special Offer: 80% OFF — $99/yr for Unlimited Access ($499) • Limited
				Time → <a href="https://app.myculture.app/signup">Claim Now</a>
			</p>
			<Header />

			<div className="main-body">
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
							<img src="/myculture-ai-clone/intro-cbl-right.png" />
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
							img="/myculture-ai-clone/pre-features-img/star.png"
							title="Hire the Right Talent"
							text="Evaluate candidates based on culture-fit and align on acceptable behaviors"
							buttonText="Get Started"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/pre-features-img/play.png"
							title="Onboard New Employees"
							text="Help newcomers understand and align with company values"
							buttonText="Get Started"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/pre-features-img/think.png"
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
							img="/myculture-ai-clone/feature-card-img/first.png"
						/>
						<FeatureCard
							title="Data-Driven Hiring & Team Building"
							text={
								"With our culture assessment tool, you can quickly analyze the work styles and values of candidates, new hires, or existing team members.\n\nCreate assessments in just a few minutes and use the results to guide your hiring or team-building activities. Foster better communication, collaboration, and synergy among team members, resulting in a more effective and cohesive team."
							}
							img="/myculture-ai-clone/feature-card-img/second.png"
						/>
						<FeatureCard
							title="Secure, Confidential, and Hassle-Free"
							text={
								"We prioritize data privacy. All candidate responses are stored securely and treated with the utmost confidentiality.\n\nWith our easy-to-use platform, you can effortlessly set up, deliver, and analyze assessments, streamlining the hiring process and ensuring the protection of your candidate's information."
							}
							img="/myculture-ai-clone/feature-card-img/third.png"
						/>
						<FeatureCard
							title="Time-Saving Automation with Stunning Reports"
							text={
								"Our automated assessment tool generates instant, beautifully designed reports filled with actionable insights. Save hours of manual evaluation and reduce the risk of human bias.\n\nUse the reports to identify the best candidates, improve your interviews, and ultimately hire individuals who will contribute positively to your organization."
							}
							img="/myculture-ai-clone/feature-card-img/fourth.png"
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
							img="/myculture-ai-clone/how-it-works-img/01.png"
						/>
						<WorkingPoint
							title="Set up your values"
							text="Configure your values and other variables based on your company culture."
							img="/myculture-ai-clone/how-it-works-img/02.png"
						/>
						<WorkingPoint
							title="Send out invites"
							text="Share to anyone quickly and easily via a private link or email."
							img="/myculture-ai-clone/how-it-works-img/03.png"
						/>
						<WorkingPoint
							title="Get the results"
							text="View each candidate's results as a report card. Optionally, share results with them too."
							img="/myculture-ai-clone/how-it-works-img/04.png"
						/>
					</div>
				</div>

				<div id="assessments" className="section assessments">
					<div className="section-head-text assessments-head-text">
						<h1>Assessment Library</h1>
						<p>
							Build your assessment in minutes by adding any combination of the
							following sections:
						</p>
					</div>

					<div className="section-card-box assessments-card-box">
						<Card
							img="/myculture-ai-clone/assessments-img/yellow.png"
							title="Values Alignment"
							text="Values determine behavior. When personal values are aligned with company core values, work is easy and natural. This is foundational to understanding culture fit."
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/assessments-img/meter.png"
							title="Culture Profile"
							text="Organizational culture is driven by competing values. Identify and match culture profiles based on Collaborate, Create, Compete, and Control across six dimensions of work. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/assessments-img/yellow.png"
							title="Human Skills"
							text="Human skills (soft skills) —written communication, empathy, situational awareness, and critical thinking are essential for developing successful relationships and sound reasoning and decision-making. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/assessments-img/check.png"
							title="Acceptable Behaviors"
							text="Behaviors are considered toxic when they don’t align with what’s expected. Understand behaviors that are acceptable, discouraged, or not-tolerated and identify mismatches. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/assessments-img/red.png"
							title="Work Style Identifier"
							text="Identify a candidate’s work style based on the 3P framework. Product, Process, or People. Understanding the inclination for each work style provides insight into how work is completed and prioritized. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/assessments-img/meter.png"
							title="Logic Test"
							text="Logical reasoning is key to problem-solving and decision-making. This test gauges an ability to decipher patterns, draw logical conclusions, and tackle complex problems. "
							buttonText="Add"
							href="https://app.myculture.ai/signup"
						/>
					</div>
				</div>

				<div className="section compare">
					<div className="section-head-text compare-head-text">
						<h1>Quickly and easily compare candidates</h1>
						<p>
							We've made it easy for you to view and compare results, whether
							you want to study a group of candidates or a team
						</p>
					</div>

					<div className="section-card-box compare-card-box">
						<Card
							img="/myculture-ai-clone/assessments-img/yellow.png"
							title="Dashboards"
							text="Ready-to-go visualizations that are updated with each candidate response"
							buttonText="Try for free"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/compare-img/presentation.png"
							title="Presentation-ready"
							text="Share the cohort analysis with your team to collectivity identify gaps and opportunities. Align as a team."
							buttonText="Try for free"
							href="https://app.myculture.ai/signup"
						/>
						<Card
							img="/myculture-ai-clone/compare-img/views.png"
							title="Detailed views"
							text="Expand on each item to get deeper insights into scores and quickly identify respondents who are a good fit for your culture."
							buttonText="Try for free"
							href="https://app.myculture.ai/signup"
						/>
					</div>
				</div>

				<div className="section toolbox">
					<div className="section-head-text toolbox-head-text">
						<h1>A Toolbox for HR and People Managers</h1>
						<p>
							Access to AI tools that help you manage hiring, onboarding, and
							team performance.
						</p>
					</div>

					<div className="section-card-box toolbox-card-box">
						<Card
							img="/myculture-ai-clone/toolbox-img/post.svg"
							title="Job Post Generator"
							text="Autocraft detailed and effective job posts"
							buttonText="More info"
							href="htttps://myculture.ai/job-post-generator"
						/>
						<Card
							img="/myculture-ai-clone/toolbox-img/team.svg"
							title="Team Role Generator"
							text="Define roles, behaviors, and promotion paths"
							buttonText="More info"
							href="htttps://myculture.ai/team-role-generator"
						/>
						<Card
							img="/myculture-ai-clone/toolbox-img/plan.svg"
							title="30/60/90-day Plan"
							text="Structured 30/60/90-day integration plan"
							buttonText="More info"
							href="htttps://myculture.ai/30-60-90-day-plan-generator"
						/>
						<Card
							img="/myculture-ai-clone/toolbox-img/track.svg"
							title="OKR Generator"
							text="Set and track clear objectives and results"
							buttonText="More info"
							href="htttps://myculture.ai/okr-generator"
						/>
						<Card
							img="/myculture-ai-clone/toolbox-img/arrow.svg"
							title="Career Tracker Generator"
							text="Visualize and guide team member growth"
							buttonText="More info"
							href="htttps://myculture.ai/career-tracker-generator"
						/>
						<Card
							img="/myculture-ai-clone/toolbox-img/graph.svg"
							title="Performance Improvement Plan"
							text="Structured plan for performance enhancement"
							buttonText="More info"
							href="htttps://myculture.ai/performance-improvement-plan-generator"
						/>
					</div>
				</div>

				<div id="pricing" className="section pricing">
					<div className="section-head-text pricing-head-text">
						<h1>Simple Pricing Plan</h1>
						<p>Choose your plan and start assessing candidates today</p>
					</div>

					<div className="section-card-box pricing-card-box">
						<PricingCard
							plan="Free"
							text="Try our complete culture assessment platform"
							price="0"
							duration="forever"
							pointText=""
							points={[
								"5 candidate credits",
								"Full assessment suite",
								"Group analytics",
								"Team collaboration",
								"Custom branding",
								"Access to Manager Toolbox",
							]}
						>
							<p className="first-note">
								🛈 <i>No credit card required</i>
							</p>
						</PricingCard>
						<PricingCard
							plan="Growth"
							text="Scale your hiring with confidence"
							price="99"
							duration="per year"
							pointText="Includes Free features, plus:"
							points={[
								"100 candidate credits annually",
								"24-month credit rollover",
								"Bulk Invites",
								"Standard support",
							]}
							customClass="pc-other"
						/>
						<PricingCard
							plan="Business Plus"
							text="For teams with ongoing hiring needs"
							price="499"
							duration="per year"
							pointText="Includes Growth features, plus:"
							points={[
								"Unlimited candidate assessments",
								"ATS Integration",
								"Priority support",
								"API access",
							]}
							customClass="pc-other"
						/>
					</div>
				</div>

				<div className="section faq">
					<div className="section-head-text faq-head-text">
						<h1>FAQ</h1>
						<p>Frequently asked questions answered</p>
					</div>

					<div className="section-card-box faq-card-box">
						<div className="faq-card">
							<h2>What are assessment credits?</h2>
							<p>
								Each credit lets you assess one candidate using our AI culture
								fit platform. Whether you use our standard or custom
								assessments, it's always one credit per candidate. Free plan
								credits never expire, and Growth plan credits roll over for 24
								months.
							</p>
						</div>
						<div className="faq-card">
							<h2>Can I switch plans or buy more credits?</h2>
							<p>
								Yes! You can upgrade, downgrade, or buy additional credits
								anytime. Unused credits transfer when you switch plans, and
								there's no minimum commitment period. Enterprise users get
								unlimited credits.
							</p>
						</div>
						<div className="faq-card">
							<h2>What features do I get with each plan?</h2>
							<p>
								Every plan includes our complete assessment platform - you'll
								get access to all assessment types, analytics, and team
								features. The main differences are credit amounts and enterprise
								features (ATS integration, API access, and priority support).
							</p>
						</div>
						<div className="faq-card">
							<h2>How do I earn free credits?</h2>
							<p>
								Share MyCulture.ai and earn 10 free credits when someone signs
								up using your referral link. There's no limit to referral
								credits, and they never expire.
							</p>
						</div>
					</div>
				</div>

				<div className="section culture-assessments">
					<div className="section-head-text culture-assessments-head-text">
						<h1>Why Culture Assessments?</h1>
						<p>
							Culture assessments offer more than personality tests when hiring,
							onboarding, and team-building
						</p>
					</div>

					<div className="culture-assessments-table-box">
						<table className="ca-table" cellSpacing="0">
							<thead>
								<tr>
									<th>Aspect</th>
									<th>Culture Assessment</th>
									<th>Personality Test</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Focus</td>
									<td>Aligns values and beliefs with the company culture</td>
									<td>Assesses fixed personality traits</td>
								</tr>
								<tr>
									<td>Compatibility</td>
									<td>
										Assesses fit with the company's mission, values, and goals
									</td>
									<td>
										May overlook compatibility with organizational culture
									</td>
								</tr>
								<tr>
									<td>Diversity</td>
									<td>
										Can foster diversity by emphasizing shared values over
										personality types
									</td>
									<td>
										May unintentionally stereotype candidates into fixed
										categories
									</td>
								</tr>
								<tr>
									<td>Adaptability</td>
									<td>
										Tailored to a company's unique culture and can evolve with
										the organization
									</td>
									<td>Often a standardized, one-size-fits-all approach</td>
								</tr>
								<tr>
									<td>Outcomes</td>
									<td>
										Better alignment, stronger teamwork, and higher retention
									</td>
									<td>
										Limited insights into how a candidate will mesh with the
										company culture
									</td>
								</tr>
								<tr>
									<td>Employee Engagement</td>
									<td>
										Promotes shared values and beliefs for a more engaged
										workforce
									</td>
									<td>
										Doesn't directly link to employee engagement with the
										company culture
									</td>
								</tr>
								<tr>
									<td>Flexibility</td>
									<td>
										Can adjust assessments to suit different team dynamics and
										company growth stages
									</td>
									<td>
										Often static and less adjustable to changing company needs
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div id="resources" className="section resources">
					<div className="section-head-text resources-head-text">
						<h1>Resources</h1>
						<p>
							Shortcuts to guides, walk-throughs, and materials from our blog
						</p>
					</div>

					<div className="resources-card-box">
						<ResourceCard
							img="/myculture-ai-clone/resources-img/hands.jpg"
							href="https://blog.happily.ai/the-ultimate-guide-to-organizational-culture-and-core-values/"
							title="The Ultimate Guide to Organizational Culture & Core Values"
							text="Core values serve as the foundation of a company's culture and shape the way employees behave and make decisions. This comprehensive guide provides step-by-step instructions, tips, and best practices to help leaders create meaningful, relevant, and actionable values."
						/>
						<ResourceCard
							img="/myculture-ai-clone/resources-img/dude.jpg"
							href="https://blog.happily.ai/bridging-the-values-gap-how-strong-company-culture-can-overcome-generational-differences/"
							title="Bridging the Values Gap: How Strong Company Culture Can Overcome Generational Differences"
							text="Are generational gaps causing conflict in your workplace? It might be a values gap caused by weak company culture. Discover how shared values can bridge this gap and create a more productive and engaged workforce."
						/>
						<ResourceCard
							img="/myculture-ai-clone/resources-img/cups.jpg"
							href="https://blog.happily.ai/24-company-core-values-exploring-their-pros-and-cons/"
							title="24 Company Core Values: Exploring Their Pros and Cons"
							text="Discover the unseen side of company core values, where we untangle the complex interplay of benefits and costs. Here's a guide to redefining core values, and embracing the path to a more productive, value-driven organization."
						/>
					</div>
				</div>

				<div className="pre-footer">
					<div className="pre-footer-card">
						<div className="pfc-left">
							<h1>Ready to act on your values?</h1>
							<p>
								Sign up, create an assessment, and share them with your
								candidates in no time!
							</p>
						</div>
						<div className="pfc-right">
							<Button1
								text="Get Started →"
								href="https://app.myculture.app/signup"
							/>
						</div>
					</div>
				</div>

				<div className="footer">
					<div className="footer-branding">
						<div className="fb-top">
							<img src="/myculture-ai-clone/myculture-logo.png" />
							<span>MyCulture</span>
						</div>
						<p>Cookie Settings</p>
					</div>

					<ul className="footer-links-box">
						<li className="flb-links-list">
							<h4>Solutions</h4>
							<ul className="flb-links">
								<li>
									<a href="https://happily.ai/">Happily.ai</a>
								</li>
								<li>
									<a href="https://myculture.ai/">MyCulture.ai</a>
								</li>
							</ul>
						</li>
						<li className="flb-links-list">
							<h4>Sitemap</h4>
							<ul className="flb-links">
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
						<li className="flb-links-list">
							<h4>Toolbox</h4>
							<ul className="flb-links">
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
						<li className="flb-links-list">
							<h4>Contact Us</h4>
							<ul className="flb-links">
								<li>
									<a href="https://www.myculture.ai/contact-us">
										Submit a Form
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
