import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import ArchitecturalServicePage from "./ArchitecturalServicePage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "en" },
  }),
}));

test("renders architectural service metadata, content, and structured data", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <ArchitecturalServicePage />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Architectural Design & Engineering Consultancy in Sharjah and Ajman",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Architectural Engineering Consultancy Services",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Does Sabir Elsir provide architectural design services in Sharjah and Ajman?",
    ),
  ).toBeInTheDocument();
  expect(document.title).toBe(
    "Architectural Design & Engineering Consultancy in Sharjah & Ajman",
  );
  expect(
    document.querySelector('link[rel="canonical"]'),
  ).toHaveAttribute(
    "href",
    "https://www.sabirelsir.ae/services/architectural-engineering-consultancy",
  );

  const structuredData = JSON.parse(
    document.head.querySelector('script[type="application/ld+json"]').textContent,
  );
  expect(structuredData["@graph"].map(({ "@type": type }) => type)).toEqual(
    expect.arrayContaining(["Service", "BreadcrumbList", "FAQPage"]),
  );
  expect(
    structuredData["@graph"].find(({ "@type": type }) => type === "FAQPage")
      .mainEntity,
  ).toHaveLength(3);
});
