import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  schema?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  schema,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];

    if (keywords) {
      metaTags.push({ name: "keywords", content: keywords });
    }

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });

    // Update canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Add structured data (JSON-LD)
    if (schema) {
      const scriptId = "structured-data";
      let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

      if (!scriptElement) {
        scriptElement = document.createElement("script") as HTMLScriptElement;
        scriptElement.id = scriptId;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }

      scriptElement.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, ogType, schema]);

  return null;
};

export default SEO;
