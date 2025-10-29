import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterImage?: string;
  schema?: object | object[];
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://forwardtriage.com/og-image.jpg",
  ogUrl,
  twitterCard = "summary_large_image",
  twitterImage,
  schema,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Base URL
    const baseUrl = "https://forwardtriage.com";
    const finalCanonical = canonical || ogUrl || window.location.href;
    const finalOgUrl = ogUrl || finalCanonical;
    const finalOgImage = ogImage || `${baseUrl}/og-image.jpg`;
    const finalTwitterImage = twitterImage || finalOgImage;

    // Update meta tags
    const metaTags = [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: finalOgUrl },
      { property: "og:image", content: finalOgImage },
      { property: "og:site_name", content: "ForwardTriage" },
      { name: "twitter:card", content: twitterCard },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: finalTwitterImage },
    ];

    if (keywords) {
      metaTags.push({ name: "keywords", content: keywords });
    }

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });

    // Update canonical link
    if (finalCanonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", finalCanonical);
    }

    // Add structured data (JSON-LD)
    // Remove old structured data scripts
    const oldScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo]');
    oldScripts.forEach((script) => script.remove());

    // Add new structured data
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      
      schemas.forEach((schemaData, index) => {
        const scriptId = `structured-data-${index}`;
        let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

        if (!scriptElement) {
          scriptElement = document.createElement("script") as HTMLScriptElement;
          scriptElement.id = scriptId;
          scriptElement.type = "application/ld+json";
          scriptElement.setAttribute("data-seo", "true");
          document.head.appendChild(scriptElement);
        }

        scriptElement.textContent = JSON.stringify(schemaData);
      });
    }
  }, [title, description, keywords, canonical, ogType, ogImage, ogUrl, twitterCard, twitterImage, schema]);

  return null;
};

export default SEO;
