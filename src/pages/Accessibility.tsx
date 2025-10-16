import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Accessibility Notice - Forward Triage | WCAG Compliance & Accessibility Features"
        description="Forward Triage accessibility commitment. Learn about our WCAG 2.1 Level AA compliance efforts, accessibility features, and how we collect visitor data to improve user experience."
        keywords="accessibility, WCAG compliance, website accessibility, screen reader compatible, keyboard navigation, inclusive design"
        canonical="https://forwardtriage.com/accessibility"
      />
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Accessibility Notice</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last Updated: January 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Our Accessibility Commitment
            </h2>
            <p className="text-muted-foreground">
              Forward Triage is committed to ensuring digital accessibility for
              people with disabilities. We are continually improving the user
              experience for everyone and applying the relevant accessibility
              standards.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>WCAG 2.1 Level AA compliance goals</li>
              <li>Ongoing improvements and updates</li>
              <li>User feedback welcome and valued</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Website Accessibility Features
            </h2>
            <p className="text-muted-foreground mb-3">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Full keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Text resizing without loss of functionality</li>
              <li>Sufficient color contrast ratios</li>
              <li>Clear and consistent navigation structure</li>
              <li>Descriptive link text and image alt attributes</li>
              <li>Form labels properly associated with inputs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect From Visitors
            </h2>
            <p className="text-muted-foreground mb-3">
              When you visit our website, we may collect the following
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Form submissions: name, email, phone, company, service interests,
                and messages
              </li>
              <li>
                Analytics data: page views, time on site, browser information
              </li>
              <li>Cookies: essential and analytics cookies</li>
              <li>IP addresses for security and fraud prevention</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How Visitor Data Is Used
            </h2>
            <p className="text-muted-foreground mb-3">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Improve user experience and website functionality</li>
              <li>Process inquiries and demo requests</li>
              <li>Analyze website usage and optimize performance</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p className="text-muted-foreground mb-3">
              We protect your data through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Secure transmission using HTTPS/SSL encryption</li>
              <li>Encrypted storage systems</li>
              <li>Limited access controls based on job function</li>
              <li>Regular security audits and updates</li>
              <li>Data retention policies aligned with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the data we've collected about you</li>
              <li>Request corrections to your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of non-essential tracking and analytics</li>
              <li>Receive your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Assistive Technology Compatibility
            </h2>
            <p className="text-muted-foreground mb-3">
              Our website is designed to be compatible with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Keyboard-only navigation</li>
              <li>Voice recognition software</li>
              <li>Browser zoom and text resizing features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Known Limitations</h2>
            <p className="text-muted-foreground">
              Despite our best efforts, some limitations may exist:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>
                Third-party content may not meet our accessibility standards
              </li>
              <li>
                Some PDF documents may not be fully accessible (we're working to
                improve this)
              </li>
              <li>Legacy content is being updated on a rolling basis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Accessibility Assistance
            </h2>
            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg space-y-3">
              <p className="text-foreground">
                If you experience any difficulty accessing our website or have
                suggestions for improvement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@panvatech.com"
                    className="text-primary hover:underline"
                  >
                    support@panvatech.com
                  </a>
                </li>
                <li>Alternative formats available upon request</li>
                <li>
                  We welcome your feedback and will respond within 3 business days
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Regular Reviews</h2>
            <p className="text-muted-foreground">
              We conduct ongoing accessibility audits and reviews to ensure our
              website remains accessible. Our commitment includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>Quarterly accessibility assessments</li>
              <li>Continuous improvement based on user feedback</li>
              <li>Staff training on accessibility best practices</li>
              <li>Integration of accessibility in our development process</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Accessibility;
