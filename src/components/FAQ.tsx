import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Forward Triage and how does it work?",
    answer: "Forward Triage is an AI-powered healthcare triage software that streamlines patient care delivery. It works by collecting patient information through an intuitive interface, using advanced AI algorithms to prioritize patients based on medical urgency and symptoms, and then directing patients to appropriate care pathways efficiently. This reduces wait times by 40% and improves patient outcomes."
  },
  {
    question: "Is Forward Triage HIPAA compliant and secure?",
    answer: "Yes, Forward Triage is fully HIPAA compliant with enterprise-grade security. We use advanced data encryption, secure data storage, and follow all healthcare data protection regulations. Our platform maintains 99.9% uptime and undergoes regular security audits to ensure the highest level of patient data protection."
  },
  {
    question: "How does Forward Triage integrate with existing EHR systems?",
    answer: "Forward Triage offers seamless integration with existing Electronic Health Record (EHR) systems and healthcare infrastructure. Our platform uses standard healthcare data exchange protocols (HL7, FHIR) to connect with major EHR systems without disrupting your current workflows. Implementation typically takes 2-4 weeks with minimal downtime."
  },
  {
    question: "What are the cost savings with Forward Triage?",
    answer: "Healthcare providers using Forward Triage typically see a 40% reduction in operational costs through improved resource allocation, reduced wait times, and optimized staff workflows. The AI-powered prioritization eliminates inefficiencies and ensures staff time is focused on the most critical cases, resulting in significant cost savings and ROI within the first quarter."
  },
  {
    question: "What kind of support does Forward Triage provide?",
    answer: "Forward Triage offers 24/7 customer support to all users. This includes phone support at 1-800-916-2459, email support at support@panvatech.com, comprehensive training materials, onboarding assistance, and regular software updates. Our dedicated support team ensures your healthcare facility can deliver uninterrupted patient care at all times."
  },
  {
    question: "How many patients can Forward Triage handle?",
    answer: "Forward Triage is designed to scale with your needs. Our current clients process over 50,000 patient triages monthly. The platform can handle high-volume healthcare environments including emergency departments, urgent care centers, and large hospital systems without performance degradation."
  },
  {
    question: "What makes Forward Triage's AI different from other triage systems?",
    answer: "Forward Triage uses advanced machine learning algorithms specifically trained on healthcare triage scenarios. Our AI considers multiple factors including patient symptoms, medical history, vital signs, and current hospital capacity to make intelligent prioritization decisions. The system continuously learns and improves from each interaction, achieving a 95% user satisfaction rate."
  },
  {
    question: "Can Forward Triage be customized for different healthcare settings?",
    answer: "Yes, Forward Triage offers customizable assessment protocols that can be tailored to various healthcare settings including emergency departments, urgent care facilities, telemedicine platforms, and specialty clinics. You can configure triage criteria, workflows, and reporting to match your specific operational requirements."
  }
];

// Generate FAQ Schema for SEO/GEO
export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

const FAQ = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about Forward Triage healthcare software
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="/contact" 
            className="text-primary font-semibold hover:underline"
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
