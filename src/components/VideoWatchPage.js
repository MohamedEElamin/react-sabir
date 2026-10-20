import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import "../styles/VideoWatchPage.css";

const videoContent = {
  en: {
    title: "Modern Villa Design Video | Sabir Elsir Engineering Consultants",
    name: "Modern Villa Design",
    description:
      "Watch a modern villa design presentation by Sabir Elsir Engineering Consultants, an engineering consultancy serving the UAE and Sudan.",
    label: "Project video",
    watchOnYoutube: "Watch on YouTube",
    backToHome: "Back to home",
    canonical: "https://www.sabirelsir.ae/videos/modern-villa-design",
  },
  ar: {
    title: "فيديو تصميم فيلا حديثة | صابر السر للاستشارات الهندسية",
    name: "تصميم فيلا حديث",
    description:
      "شاهد عرضاً لتصميم فيلا حديثة من صابر السر للاستشارات الهندسية، التي تقدم خدماتها في الإمارات والسودان.",
    label: "فيديو مشروع",
    watchOnYoutube: "شاهد على YouTube",
    backToHome: "العودة إلى الرئيسية",
    canonical: "https://www.sabirelsir.ae/videos/modern-villa-design",
  },
};

function VideoWatchPage() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const content = videoContent[language];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: content.name,
    description: content.description,
    thumbnailUrl: ["https://i.ytimg.com/vi/kDAkQ_-998s/hqdefault.jpg"],
    embedUrl: "https://www.youtube-nocookie.com/embed/kDAkQ_-998s",
    publisher: {
      "@type": "Organization",
      name: "Sabir Elsir Engineering Consultants",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sabirelsir.ae/images/logo-part-min.jpg",
      },
    },
    inLanguage: language,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": content.canonical,
    },
  };

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    const headUpdates = [
      {
        selector: 'meta[name="description"]',
        tagName: "meta",
        attributes: { name: "description", content: content.description },
      },
      {
        selector: 'link[rel="canonical"]',
        tagName: "link",
        attributes: { rel: "canonical", href: content.canonical },
      },
      {
        selector: 'meta[property="og:type"]',
        tagName: "meta",
        attributes: { property: "og:type", content: "video.other" },
      },
      {
        selector: 'meta[property="og:title"]',
        tagName: "meta",
        attributes: { property: "og:title", content: content.title },
      },
      {
        selector: 'meta[property="og:description"]',
        tagName: "meta",
        attributes: {
          property: "og:description",
          content: content.description,
        },
      },
      {
        selector: 'meta[property="og:image"]',
        tagName: "meta",
        attributes: {
          property: "og:image",
          content: "https://i.ytimg.com/vi/kDAkQ_-998s/hqdefault.jpg",
        },
      },
      {
        selector: 'meta[property="og:video"]',
        tagName: "meta",
        attributes: { property: "og:video", content: structuredData.embedUrl },
      },
    ];
    const previousHeadState = headUpdates.map((update) => {
      const element =
        document.head.querySelector(update.selector) ||
        document.createElement(update.tagName);
      const existed = element.parentNode === document.head;
      const previousAttributes = Object.keys(update.attributes).map((name) => ({
        name,
        value: element.getAttribute(name),
      }));

      Object.entries(update.attributes).forEach(([name, value]) => {
        element.setAttribute(name, value);
      });
      if (!existed) document.head.appendChild(element);

      return { element, existed, previousAttributes };
    });
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(schemaScript);
    document.title = content.title;
    document.documentElement.lang = language;

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      schemaScript.remove();
      previousHeadState.forEach(({ element, existed, previousAttributes }) => {
        if (!existed) {
          element.remove();
          return;
        }
        previousAttributes.forEach(({ name, value }) => {
          if (value === null) element.removeAttribute(name);
          else element.setAttribute(name, value);
        });
      });
    };
  }, [content, language, structuredData]);

  return (
    <>
      <div className="video-watch-page" dir={language === "ar" ? "rtl" : "ltr"}>
        <PageIntro
          eyebrow={content.label}
          title={content.name}
          description={content.description}
        />
        <article className="site-page-content video-watch-content">
          <div className="video-watch-player">
            <iframe
              src="https://www.youtube-nocookie.com/embed/kDAkQ_-998s"
              title={content.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="video-watch-actions">
            <a
              href="https://www.youtube.com/watch?v=kDAkQ_-998s"
              target="_blank"
              rel="noreferrer"
            >
              {content.watchOnYoutube}
            </a>
            <Link to="/">{content.backToHome}</Link>
          </div>
        </article>
      </div>
    </>
  );
}

export default VideoWatchPage;
