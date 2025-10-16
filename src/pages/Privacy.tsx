import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy - Forward Triage | Healthcare Data Protection"
        description="Forward Triage privacy policy. Learn how we collect, use, and protect your personal and healthcare information. HIPAA compliant data security and encryption practices."
        keywords="privacy policy, data protection, HIPAA compliance, healthcare data security, patient privacy, data encryption"
        canonical="https://forwardtriage.com/privacy"
      />
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last Updated: January 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              Forward Triage ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              What Data We Collect
            </h2>
            <p className="text-muted-foreground mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Form submissions: name, email address, phone number, company name,
                service interests, and messages
              </li>
              <li>Cookies and analytics data to improve user experience</li>
              <li>Website usage information and interaction patterns</li>
              <li>IP addresses and browser information for security purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Data
            </h2>
            <p className="text-muted-foreground mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process demo requests and inquiries</li>
              <li>Improve our services and website functionality</li>
              <li>
                Send service updates and information (you can opt-out at any time)
              </li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Data Protection Measures
            </h2>
            <p className="text-muted-foreground mb-3">
              We implement appropriate security measures to protect your personal
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Encryption using SSL/TLS for data transmission</li>
              <li>Secure database storage with access controls</li>
              <li>Limited employee access on a need-to-know basis</li>
              <li>Regular security audits and vulnerability assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
            <p className="text-muted-foreground mb-3">
              We respect your privacy and handle data sharing carefully:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Your personal information is never sold to third parties
              </li>
              <li>
                Data may be shared with service providers (hosting, analytics)
                under strict confidentiality agreements
              </li>
              <li>We may disclose information when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal data we hold</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies Policy</h2>
            <p className="text-muted-foreground mb-3">
              We use cookies to enhance your experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>
                You can manage cookie preferences through your browser settings
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Contact for Privacy Questions
            </h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:{" "}
              <a
                href="mailto:support@panvatech.com"
                className="text-primary hover:underline"
              >
                support@panvatech.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
