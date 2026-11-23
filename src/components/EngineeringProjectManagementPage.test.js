import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import EngineeringProjectManagementPage from "./EngineeringProjectManagementPage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "en" },
  }),
}));

test("renders project management metadata, content, FAQs, and structured data", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <EngineeringProjectManagementPage />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Engineering Project Management Consultancy in Sharjah and Ajman",
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
      "Depending on the agreed project scope, our services may include project planning and scheduling, engineering coordination, construction progress monitoring, quality control, risk management, technical reporting, and coordination between project stakeholders.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Project management supports cost and schedule control through planning, progress monitoring, coordination, and early identification of potential project risks. Actual results depend on project conditions, scope, and implementation.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("table", {
      name: "Engineering project management services and descriptions",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("row", {
      name: "Engineering Coordination Coordinating architectural, structural, civil, and MEP disciplines",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("row", {
      name: "Technical Reporting Documenting project progress and technical issues",
    }),
  ).toBeInTheDocument();
  expect(
    document.querySelector(".service-detail-page"),
  ).not.toHaveTextContent(/and across the UAE|across the UAE/i);
  expect(document.title).toBe(
    "Engineering Project Management | Sharjah & Ajman",
  );
  expect(
    document.querySelector('meta[name="description"]'),
  ).toHaveAttribute(
    "content",
    "Engineering project management, construction coordination, and progress monitoring in Sharjah and Ajman.",
  );
  expect(
    document.querySelector('link[rel="canonical"]'),
  ).toHaveAttribute(
    "href",
    "https://www.sabirelsir.ae/services/engineering-project-management",
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
    "https://www.sabirelsir.ae/services/engineering-project-management",
  );
  expect(faqPage.mainEntity).toHaveLength(6);
  expect(
    structuredData["@graph"].some(
      ({ "@type": type }) => type === "BreadcrumbList",
    ),
  ).toBe(true);
});
