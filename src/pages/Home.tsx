import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain,
  BarChart3,
  Plug,
  Clock,
  Shield,
  DollarSign,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Healthcare Triage
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Streamline patient care delivery with intelligent triage solutions
              that improve outcomes and optimize resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#features">Learn More</a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Triage Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Our intelligent platform provides everything you need to deliver
              exceptional patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Intelligent Triage System
              </h3>
              <p className="text-muted-foreground">
                AI-powered patient prioritization for optimal care delivery
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Analytics
              </h3>
              <p className="text-muted-foreground">
                Data-driven insights for better decision making
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <Plug className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-muted-foreground">
                Easy integration with existing healthcare systems
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Round-the-clock access for healthcare providers
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Secure & Compliant
              </h3>
              <p className="text-muted-foreground">
                HIPAA-compliant platform with enterprise-grade security
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-muted-foreground">
                Reduce operational costs while improving patient outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to transform your healthcare triage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Patient Assessment</h3>
              <p className="text-muted-foreground">
                Gather comprehensive patient information through our intuitive
                interface
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Intelligent Triage</h3>
              <p className="text-muted-foreground">
                AI algorithms prioritize patients based on medical urgency and
                needs
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Streamlined Care</h3>
              <p className="text-muted-foreground">
                Direct patients to appropriate care pathways efficiently
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50,000+</div>
              <div className="text-muted-foreground">
                Patients Triaged Monthly
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">40%</div>
              <div className="text-muted-foreground">
                Reduction in Wait Times
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">User Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Healthcare Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Forward Triage has revolutionized our patient care workflow.
                The AI-powered prioritization has significantly reduced wait
                times."
              </p>
              <div className="font-semibold">Dr. Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">
                Chief Medical Officer
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The seamless integration with our existing systems made
                implementation a breeze. Highly recommend!"
              </p>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-muted-foreground">
                Hospital Administrator
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Outstanding support and continuous updates. Forward Triage has
                become essential to our operations."
              </p>
              <div className="font-semibold">Emily Rodriguez</div>
              <div className="text-sm text-muted-foreground">
                Director of Nursing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Triage?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join hundreds of healthcare providers improving patient outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/partner">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
