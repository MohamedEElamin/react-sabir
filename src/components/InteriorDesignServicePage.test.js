import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import InteriorDesignServicePage from "./InteriorDesignServicePage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "en" },
  }),
}));

test("renders interior design metadata, content, FAQs, and structured data", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <InteriorDesignServicePage />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Interior Design Consultancy & Engineering Services in Sharjah and Ajman",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Frequently Asked Questions",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "We coordinate interior design requirements with architectural and MEP engineering disciplines to support the integration of lighting, electrical systems, ventilation, and other building services into the proposed interior spaces.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Sabir Elsir Engineering Consultants provides interior design consultancy services, including space planning, interior layouts, design concepts, 3D visualization, material selection, and design documentation, depending on project requirements.",
    ),
  ).toBeInTheDocument();
  expect(document.title).toBe("Interior Design Consultancy in Sharjah & Ajman");
  expect(
    document.querySelector('meta[name="description"]'),
  ).toHaveAttribute(
    "content",
    "Interior design consultancy, space planning, 3D visualization, and engineering coordination in Sharjah and Ajman.",
  );
  expect(
    document.querySelector('link[rel="canonical"]'),
  ).toHaveAttribute(
    "href",
    "https://www.sabirelsir.ae/services/interior-design-consultancy",
  );

  const structuredData = JSON.parse(
    document.head.querySelector('script[type="application/ld+json"]').textContent,
  );
  const service = structuredData["@graph"].find(
    ({ "@type": type }) => type === "Service",
  );
  const faqPage = structuredData["@graph"].find(
    ({ "@type": type }) => type === "FAQPage",
  );

  expect(service.provider["@id"]).toBe(
    "https://www.sabirelsir.ae/#organization",
  );
  expect(service.url).toBe(
    "https://www.sabirelsir.ae/services/interior-design-consultancy",
  );
  expect(faqPage.mainEntity).toHaveLength(6);
  expect(
    structuredData["@graph"].some(
      ({ "@type": type }) => type === "BreadcrumbList",
    ),
  ).toBe(true);
});
