import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import GeneralBuildingEngineeringPage from "./GeneralBuildingEngineeringPage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "en" },
  }),
}));

test("renders building consultancy metadata, services, FAQs, and schema", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <GeneralBuildingEngineeringPage />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "General Building Engineering Consultancy in Sharjah and Ajman",
    }),
  ).toBeInTheDocument();
  expect(document.title).toBe(
    "General Building Engineering Consultancy in Sharjah & Ajman",
  );
  expect(
    document.querySelector('meta[name="description"]'),
  ).toHaveAttribute(
    "content",
    "Building engineering consultancy, architectural planning, design coordination, and supervision in Sharjah and Ajman.",
  );
  expect(
    document.querySelector('link[rel="canonical"]'),
  ).toHaveAttribute(
    "href",
    "https://www.sabirelsir.ae/services/general-building-engineering-consultancy",
  );

  const table = screen.getByRole("table", {
    name: "General building engineering services and descriptions",
  });
  expect(table).toBeInTheDocument();
  expect(
    screen.getByRole("row", {
      name: "Structural Engineering Structural design and technical coordination, where provided",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("row", {
      name: "Engineering Supervision Technical monitoring and supervision, where contracted",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Frequently Asked Questions",
    }),
  ).toBeInTheDocument();

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
    "https://www.sabirelsir.ae/services/general-building-engineering-consultancy",
  );
  expect(faqPage.mainEntity).toHaveLength(6);
});
