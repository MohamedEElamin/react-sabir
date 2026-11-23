import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import WarehouseModificationDrawingsPage from "./WarehouseModificationDrawingsPage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "ar" },
  }),
}));

test("renders Arabic service metadata, details, FAQs, and structured data", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <WarehouseModificationDrawingsPage />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(document.documentElement).toHaveAttribute("lang", "ar");
  expect(document.title).toBe(
    "مخططات تعديل المستودعات والمصانع والورش في الشارقة",
  );
  expect(
    document.querySelector('meta[name="description"]'),
  ).toHaveAttribute(
    "content",
    "خدمات إعداد وتعديل المخططات الهندسية للمستودعات والمصانع والورش في الشارقة، مع تجهيز الوثائق اللازمة لمعاملات البلدية وSEWA والدفاع المدني.",
  );
  expect(
    document.querySelector('link[rel="canonical"]'),
  ).toHaveAttribute(
    "href",
    "https://www.sabirelsir.ae/ar/warehouse-factory-workshop-modification-drawings-sharjah",
  );
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "إعداد مخططات تعديل المستودعات والمصانع والورش في الشارقة",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("table", {
      name: "خدمات تعديل المخططات الهندسية للمنشآت الصناعية في الشارقة",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("row", {
      name: "أنواع المعاملات التعديل، التجديد، وتغيير الاستخدام",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 2, name: "الأسئلة الشائعة" }),
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
    "https://www.sabirelsir.ae/ar/warehouse-factory-workshop-modification-drawings-sharjah",
  );
  expect(faqPage.mainEntity).toHaveLength(7);
});
