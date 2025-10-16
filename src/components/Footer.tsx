import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Forward Triage" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground font-semibold">
              Transforming Healthcare Triage
            </p>
            <p className="text-sm text-muted-foreground">
              Streamline patient care delivery with intelligent triage solutions
              that improve outcomes and optimize resources.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Accessibility Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">Support:</span>
                <br />
                <a
                  href="mailto:support@panvatech.com"
                  className="hover:text-primary transition-colors"
                >
                  support@panvatech.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">Sales:</span>
                <br />
                <a
                  href="mailto:sales@panvatech.com"
                  className="hover:text-primary transition-colors"
                >
                  sales@panvatech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Forward Triage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
