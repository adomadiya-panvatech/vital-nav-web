// Schema.org structured data helpers for SEO and GEO optimization

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ForwardTriage",
  "url": "https://forwardtriage.com",
  "logo": "https://forwardtriage.com/logo.png",
  "description": "AI-powered healthcare triage software that helps hospitals and clinics streamline patient assessment, reduce wait times, and improve care outcomes.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-916-2459",
    "contactType": "Customer Support",
    "email": "support@panvatech.com",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    // Add social media links when available
  ]
});

export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ForwardTriage",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "Contact for pricing"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "description": "AI-powered healthcare triage software that automates patient assessment and prioritization. Reduce ED wait times by up to 40% and improve patient outcomes with intelligent triage solutions.",
  "featureList": [
    "AI-driven symptom analysis",
    "Real-time patient prioritization",
    "HIPAA-compliant data handling",
    "EHR system integration",
    "Automated patient assessment",
    "Emergency department optimization"
  ]
});

export const getWebPageSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "ForwardTriage",
    "url": "https://forwardtriage.com"
  },
  "about": {
    "@type": "Thing",
    "name": "Healthcare Triage Software"
  }
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact ForwardTriage",
  "description": "Get in touch with ForwardTriage healthcare triage experts. Schedule a demo, request information, or speak with our team.",
  "url": "https://forwardtriage.com/contact"
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Healthcare Triage Software",
  "provider": {
    "@type": "Organization",
    "name": "ForwardTriage"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Healthcare Triage Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Powered Patient Triage",
          "description": "Automated patient assessment and prioritization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Department Optimization",
          "description": "Reduce wait times and improve patient flow"
        }
      }
    ]
  }
});

