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
  Sparkles,
  Zap,
  HeartPulse,
  Activity,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Forward Triage",
    "description": "AI-powered healthcare triage software that streamlines patient care delivery and improves healthcare outcomes",
    "url": "https://forwardtriage.com",
    "logo": "https://forwardtriage.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-916-2459",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14269 Danielson St, Suite 400",
      "addressLocality": "Poway",
      "addressRegion": "CA",
      "postalCode": "92064",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/forward-triage",
      "https://twitter.com/forwardtriage"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Forward Triage - Healthcare Triage Software & AI Patient Triage System"
        description="Transform healthcare delivery with Forward Triage's AI-powered intelligent patient triage software. Improve outcomes, reduce wait times by 40%, optimize resources. HIPAA compliant with 99.9% uptime. Trusted by leading healthcare providers."
        keywords="healthcare triage, patient triage software, medical triage system, intelligent triage, AI triage, healthcare technology, patient prioritization, healthcare IT, HIPAA compliant triage, EHR integration, telemedicine triage, emergency triage, clinical decision support"
        canonical="https://forwardtriage.com"
        schema={schema}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span>Trusted by Leading Healthcare Providers</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Healthcare
                <span className="block text-accent-foreground">Triage Delivery</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Streamline patient care with AI-powered intelligent triage solutions that improve outcomes, reduce wait times, and optimize healthcare resources
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-lg h-14 px-8 hover-scale" asChild>
                  <Link to="/contact">
                    <HeartPulse className="mr-2 h-5 w-5" />
                    Request Demo
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8 transition-all"
                  asChild
                >
                  <a href="#features">
                    Learn More
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <Shield className="w-5 h-5" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <Activity className="w-5 h-5" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Triage Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our intelligent platform provides everything you need to deliver exceptional patient care with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Intelligent Triage System",
                description: "AI-powered patient prioritization ensures optimal care delivery based on medical urgency and available resources"
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Comprehensive data-driven insights enable better decision making and resource allocation"
              },
              {
                icon: Plug,
                title: "Seamless Integration",
                description: "Easy integration with existing EHR systems and healthcare infrastructure without disruption"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock access ensures healthcare providers can deliver care anytime, anywhere"
              },
              {
                icon: Shield,
                title: "Secure & Compliant",
                description: "HIPAA-compliant platform with enterprise-grade security and data encryption"
              },
              {
                icon: DollarSign,
                title: "Cost Effective",
                description: "Reduce operational costs by up to 40% while significantly improving patient outcomes"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How Forward Triage Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Three simple steps to revolutionize your healthcare triage process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Patient Assessment",
                description: "Gather comprehensive patient information through our intuitive interface with customizable assessment protocols"
              },
              {
                step: "02",
                title: "Intelligent Triage",
                description: "Advanced AI algorithms prioritize patients based on medical urgency, symptoms, and available care pathways"
              },
              {
                step: "03",
                title: "Streamlined Care",
                description: "Direct patients to appropriate care pathways efficiently, reducing wait times and improving outcomes"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 -right-24 w-24 h-0.5 bg-gradient-to-r from-primary to-accent" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results That Matter
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Real metrics from real healthcare providers
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {[
              { value: "50,000+", label: "Patients Triaged Monthly" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "40%", label: "Reduction in Wait Times" },
              { value: "95%", label: "User Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="space-y-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-5xl md:text-6xl font-bold">{stat.value}</div>
                <div className="text-lg text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              See what healthcare professionals are saying about Forward Triage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Forward Triage has revolutionized our patient care workflow. The AI-powered prioritization has significantly reduced wait times and improved patient satisfaction.",
                author: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                company: "Metropolitan Health System"
              },
              {
                quote: "The seamless integration with our existing systems made implementation a breeze. Outstanding ROI within the first quarter. Highly recommend!",
                author: "Michael Chen",
                role: "Hospital Administrator",
                company: "Regional Medical Center"
              },
              {
                quote: "Outstanding support and continuous updates. Forward Triage has become absolutely essential to our daily operations and patient care delivery.",
                author: "Emily Rodriguez",
                role: "Director of Nursing",
                company: "Community Health Network"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-6">
                  <div className="font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium mt-1">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Transform Your Healthcare Triage?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Join hundreds of healthcare providers who are already improving patient outcomes and operational efficiency with Forward Triage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg h-14 px-8 hover-scale" asChild>
                <Link to="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Request Demo
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8 transition-all"
                asChild
              >
                <Link to="/partner">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Partner
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
