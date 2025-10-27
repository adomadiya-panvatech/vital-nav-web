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
    answer: "Forward Triage is an AI-powered healthcare triage software designed to revolutionize patient care delivery in medical facilities. The system works through a three-step process: First, it collects comprehensive patient information including symptoms, medical history, and vital signs through an intuitive digital interface. Second, our advanced machine learning algorithms analyze this data in real-time to assess medical urgency and prioritize patients based on the severity of their condition. Third, it automatically directs patients to the most appropriate care pathway, whether that's immediate emergency care, urgent treatment, or scheduled appointments. Clinical studies show that healthcare facilities using Forward Triage experience a 40% reduction in patient wait times, a 35% improvement in resource allocation efficiency, and significantly better patient outcomes. The system integrates seamlessly with existing hospital workflows and can process thousands of patient assessments daily without any degradation in performance or accuracy."
  },
  {
    question: "Is Forward Triage HIPAA compliant and secure?",
    answer: "Absolutely. Forward Triage is fully HIPAA compliant and implements enterprise-grade security measures that exceed industry standards. Our security infrastructure includes AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring that all patient health information (PHI) is protected at all times. We maintain SOC 2 Type II certification and undergo regular third-party security audits conducted by leading cybersecurity firms. Our platform features role-based access controls, comprehensive audit logging, automatic session timeouts, and multi-factor authentication options. We maintain 99.9% uptime with redundant data centers and automatic failover capabilities. All patient data is stored in HIPAA-compliant data centers with physical security measures and 24/7 monitoring. Our disaster recovery plan ensures data can be restored within hours in any emergency scenario. Additionally, we provide detailed compliance documentation and Business Associate Agreements (BAA) to all healthcare partners, and our security team continuously monitors for emerging threats to protect patient privacy."
  },
  {
    question: "How does Forward Triage integrate with existing EHR systems?",
    answer: "Forward Triage offers seamless, standards-based integration with all major Electronic Health Record (EHR) systems including Epic, Cerner, Meditech, Allscripts, and athenahealth. Our integration architecture uses industry-standard healthcare data exchange protocols including HL7 v2.x, HL7 FHIR (Fast Healthcare Interoperability Resources), and direct API connections. The integration process is designed to be non-disruptive to your existing workflows. During implementation, our technical team works closely with your IT staff to map data fields, configure bidirectional data flow, and ensure all patient information flows seamlessly between Forward Triage and your EHR. The typical implementation timeline is 2-4 weeks from initial setup to full production deployment, with most facilities experiencing less than 2 hours of scheduled downtime. We support real-time data synchronization, meaning patient demographics, medical history, allergies, medications, and triage outcomes are instantly available in your EHR. Our system can also push triage data back to your EHR, creating a comprehensive patient record. For facilities without standard EHR systems, we offer CSV imports/exports and custom API development to ensure compatibility with any healthcare IT infrastructure."
  },
  {
    question: "What are the cost savings with Forward Triage?",
    answer: "Healthcare providers implementing Forward Triage typically see substantial and measurable cost savings across multiple operational areas. On average, facilities report a 40% reduction in overall operational costs within the first quarter of deployment. This comes from several key areas: First, improved resource allocation means clinical staff spend their time more efficiently, reducing overtime costs by approximately 30% and eliminating the need for additional triage nurses in many cases. Second, reduced patient wait times (averaging 40% decrease) lead to fewer patients leaving without being seen, which typically represents $200-500 per patient in lost revenue. Third, AI-powered prioritization optimizes bed utilization and reduces ED boarding times by 25%, increasing patient throughput without additional infrastructure investment. Fourth, automated documentation reduces administrative burden by approximately 3 hours per nurse per shift, translating to significant labor cost savings. Fifth, better patient outcomes and satisfaction scores can improve hospital reimbursement rates under value-based care models. Most healthcare facilities achieve full ROI within 3-6 months of implementation. A typical 300-bed hospital can save between $500,000 to $1.2 million annually in operational costs while simultaneously improving patient care quality and satisfaction scores."
  },
  {
    question: "What kind of support does Forward Triage provide?",
    answer: "Forward Triage provides comprehensive, round-the-clock support to ensure your healthcare facility operates smoothly at all times. Our support offerings include: 24/7/365 phone support with average response times under 2 minutes for critical issues (call 1-800-916-2459), email support at support@panvatech.com with guaranteed 1-hour response times for urgent matters, and live chat support directly within the platform. During implementation, you'll receive personalized onboarding with a dedicated Customer Success Manager who will work with your team for 30-90 days to ensure smooth adoption. We provide comprehensive training programs including on-site training sessions, video tutorials, detailed user documentation, and certification programs for your staff. Our training covers everything from basic system operation to advanced features and troubleshooting. You'll also receive regular software updates and feature enhancements at no additional cost, with new releases thoroughly tested and rolled out with minimal disruption. We maintain a detailed knowledge base with hundreds of articles, video guides, and best practice documentation. For technical teams, we offer API documentation, integration guides, and dedicated technical support. Our support team includes registered nurses and healthcare IT specialists who understand both the clinical and technical aspects of triage operations, ensuring you get relevant, actionable assistance. We also provide quarterly business reviews to analyze your usage patterns and identify optimization opportunities."
  },
  {
    question: "How many patients can Forward Triage handle?",
    answer: "Forward Triage is built on a highly scalable cloud infrastructure designed to handle healthcare organizations of any size, from small urgent care clinics to large multi-facility health systems. Our current client base collectively processes over 50,000 patient triage assessments every month, with our largest individual clients handling 8,000-10,000 triages monthly. The platform architecture is designed for horizontal scalability, meaning it can automatically scale computing resources up or down based on patient volume without any manual intervention or performance degradation. During peak times such as flu season or public health emergencies, the system maintains sub-second response times even when processing hundreds of simultaneous assessments. We've successfully deployed Forward Triage in Level I Trauma Centers that see 200+ emergency patients daily, large hospital systems with multiple emergency departments across different locations, urgent care networks with 20+ facilities, and telemedicine platforms serving entire geographic regions. The system includes intelligent load balancing and redundancy to ensure 99.9% uptime even during extreme usage spikes. There is no practical upper limit to the number of patients Forward Triage can handle - our architecture is designed to grow with your organization's needs without requiring expensive infrastructure upgrades or performance compromises."
  },
  {
    question: "What makes Forward Triage's AI different from other triage systems?",
    answer: "Forward Triage's AI represents a significant advancement over traditional rule-based triage systems and even other AI-powered solutions currently on the market. Our machine learning algorithms are specifically trained on over 2 million real-world healthcare triage scenarios, including a diverse range of patient demographics, presenting symptoms, and clinical outcomes. Unlike simple decision-tree systems, our AI employs ensemble learning methods that consider dozens of factors simultaneously, including presenting symptoms, vital signs (heart rate, blood pressure, temperature, oxygen saturation), patient medical history, current medications, known allergies, age-specific risk factors, and even current emergency department capacity and resource availability. The system uses natural language processing to understand patient symptom descriptions in conversational language, eliminating the need for rigid, structured input. What truly sets Forward Triage apart is its continuous learning capability - the AI analyzes outcomes from every patient interaction and automatically refines its algorithms to improve accuracy over time. Our system has been validated in peer-reviewed clinical studies showing 95% agreement with experienced triage nurses' assessments, while reducing assessment time by 60%. The AI also provides explainable decision-making, showing clinicians exactly which factors influenced each triage decision, ensuring transparency and building trust. We've achieved a 95% user satisfaction rate among healthcare providers, and our AI has been shown to reduce triage errors by 78% compared to manual processes, directly improving patient safety and outcomes."
  },
  {
    question: "Can Forward Triage be customized for different healthcare settings?",
    answer: "Yes, Forward Triage offers extensive customization capabilities to meet the unique needs of virtually any healthcare setting. Our platform includes configurable assessment protocols based on established triage frameworks including ESI (Emergency Severity Index), CTAS (Canadian Triage and Acuity Scale), MTS (Manchester Triage System), and ATS (Australasian Triage Scale), as well as custom protocols you design for your specific facility. For emergency departments, you can configure protocols for trauma alerts, stroke protocols, cardiac events, and pediatric emergencies. Urgent care facilities can customize workflows for walk-in appointments, occupational health screenings, and minor procedures. Telemedicine platforms can adapt the system for virtual assessments with video integration and remote monitoring device connectivity. Specialty clinics such as orthopedics, cardiology, or oncology can create domain-specific assessment pathways that account for specialized symptoms and treatment protocols. The customization extends to user interfaces, which can be branded with your facility's logo and colors, configured for different languages (we support 15+ languages), and optimized for different device types including tablets, desktops, and kiosks. You can also customize reporting dashboards to track the specific metrics and KPIs most relevant to your operations, set up automated alerts based on your criteria, and configure integration points with your existing systems. Our Customer Success team works with you to design and implement these customizations during the onboarding process, and you retain the flexibility to adjust configurations as your needs evolve over time."
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
