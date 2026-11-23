import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import CivilEngineeringServicePage from "./CivilEngineeringServicePage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "en" },
  }),
}));

test("renders civil service metadata, content, and structured data", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <CivilEngineeringServicePage />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Civil Engineering Consultancy in Sharjah and Ajman",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Civil Engineering for Project Planning and Coordination",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Frequently Asked Questions",
    }),
  ).toBeInTheDocument();
  expect(screen.getAllByText(/^Does /)).toHaveLength(3);
  expect(
    screen.getByText(
      "Sabir Elsir Engineering Consultants provides civil engineering consultancy and related engineering services for residential, commercial, and industrial developments. Services are tailored to project requirements and may include civil engineering design, technical documentation, and coordination with other engineering disciplines.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Our civil engineering services support the planning, design, and technical coordination of building and development projects, including infrastructure considerations where applicable. Working alongside architectural and structural engineering disciplines, we focus on practical solutions that consider functionality, safety, regulatory requirements, and construction needs.",
    ),
  ).toBeInTheDocument();
  expect(document.title).toBe(
    "Civil Engineering Consultancy in Sharjah & Ajman",
  );
  expect(
    document.querySelector('meta[name="description"]'),
  ).toHaveAttribute(
    "content",
    "Sabir Elsir Engineering Consultants provides civil engineering consultancy for residential, commercial, and industrial projects in Sharjah, Ajman, and across the UAE.",
  );
  expect(
    document.querySelector('link[rel="canonical"]'),
  ).toHaveAttribute(
    "href",
    "https://www.sabirelsir.ae/services/civil-engineering-consultancy",
  );

  const structuredData = JSON.parse(
    document.head.querySelector('script[type="application/ld+json"]').textContent,
  );
  const service = structuredData["@graph"].find(
    ({ "@type": type }) => type === "Service",
  );
  expect(service.provider["@type"]).toBe("Organization");
  expect(service.provider["@id"]).toBe(
    "https://www.sabirelsir.ae/#organization",
  );
  expect(service.url).toBe(
    "https://www.sabirelsir.ae/services/civil-engineering-consultancy",
  );
  expect(
    structuredData["@graph"].some(
      ({ "@type": type }) => type === "BreadcrumbList",
    ),
  ).toBe(true);
  const faqPage = structuredData["@graph"].find(
    ({ "@type": type }) => type === "FAQPage",
  );
  expect(faqPage.mainEntity).toHaveLength(6);
  expect(faqPage.mainEntity[3].acceptedAnswer.text).toContain(
    "Final approvals are subject to the applicable authority's requirements.",
  );
});
