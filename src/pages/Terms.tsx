import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last Updated: January 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using the Forward Triage website and services, you
              accept and agree to be bound by the terms and provisions of this
              agreement. If you do not agree to these terms, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Website Usage Terms
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Permitted Uses</h3>
                <p className="text-muted-foreground">
                  You may use our website for lawful purposes only and in
                  accordance with these Terms. You agree to use the website in a
                  manner that does not infringe the rights of others.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Prohibited Activities
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Transmitting malicious code or harmful content</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Interfering with other users' access to the website</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Service Description
                </h3>
                <p className="text-muted-foreground">
                  Forward Triage provides healthcare triage software solutions
                  designed to streamline patient care delivery. Service features
                  and availability may vary based on your subscription plan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Availability and Uptime
                </h3>
                <p className="text-muted-foreground">
                  While we strive for 99.9% uptime, we do not guarantee
                  uninterrupted access to our services. Scheduled maintenance will
                  be communicated in advance when possible.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Service Modifications
                </h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of our services at any time with reasonable notice to
                  users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                All content, features, and functionality on our website, including
                but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Text, graphics, logos, and images</li>
                <li>Software and source code</li>
                <li>Trademarks and service marks</li>
                <li>Design and layout</li>
              </ul>
              <p className="text-muted-foreground">
                Are owned by Forward Triage and are protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Medical Disclaimer
            </h2>
            <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-lg space-y-3">
              <p className="text-foreground font-semibold">
                IMPORTANT NOTICE:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Forward Triage is not intended for emergency use. In case of
                  emergency, call 911 or your local emergency number immediately.
                </li>
                <li>
                  Our platform does not provide medical advice, diagnosis, or
                  treatment. Always consult qualified healthcare professionals.
                </li>
                <li>
                  Use of our services does not create a doctor-patient
                  relationship.
                </li>
                <li>
                  Never disregard professional medical advice or delay seeking it
                  because of information obtained through our platform.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Disclaimer of Warranties
                </h3>
                <p className="text-muted-foreground">
                  Our services are provided "as is" without warranties of any
                  kind, either express or implied, including but not limited to
                  warranties of merchantability or fitness for a particular
                  purpose.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Limitation of Liability
                </h3>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Forward Triage shall not
                  be liable for any indirect, incidental, special, consequential,
                  or punitive damages arising from your use of our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the new Terms on
              this page and updating the "Last Updated" date. Continued use of our
              services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, please contact us at:{" "}
              <a
                href="mailto:support@panvatech.com"
                className="text-primary hover:underline"
              >
                support@panvatech.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
