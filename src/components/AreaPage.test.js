import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import AreaPage from "./AreaPage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "ar" },
  }),
}));

test("renders Khartoum asset valuation section, official link, and schema", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <AreaPage slug="khartoum" />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(document.title).toBe(
    "استشاريون هندسيون في الخرطوم وخدمات تقييم الأصول",
  );
  expect(
    document.querySelector('meta[name="description"]'),
  ).toHaveAttribute(
    "content",
    "مكتب صابر السر للاستشارات الهندسية، من بيوت الخبرة المعتمدة لدى بنك السودان المركزي، يقدم خدمات هندسية ومعمارية وتقييم الأصول في السودان.",
  );
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "استشاريون هندسيون في الخرطوم",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "تقييم الأصول في السودان – مكتب معتمد لدى بنك السودان المركزي",
    }),
  ).toBeInTheDocument();

  const officialLink = screen.getByRole("link", {
    name: /قائمة بيوت الخبرة الاستشارية المعتمدة/,
  });
  expect(officialLink).toHaveAttribute(
    "href",
    "https://cbos.gov.sd/ar/content/قائمة-بيوت-الخبرة-الاستشارية-المعتمدة-لدى-بنك-السودان-المركزي",
  );
  expect(officialLink).toHaveAttribute("target", "_blank");
  expect(officialLink).toHaveAttribute("rel", "noopener noreferrer");
  expect(screen.getByRole("link", { name: "0912311241" })).toHaveAttribute(
    "href",
    "tel:0912311241",
  );
  expect(
    screen.getByRole("link", {
      name: "sabir.elsir.eng.cons@gmail.com",
    }),
  ).toHaveAttribute("href", "mailto:sabir.elsir.eng.cons@gmail.com");

  const jsonLdScripts = Array.from(
    document.head.querySelectorAll('script[type="application/ld+json"]'),
  );
  const graph = jsonLdScripts.flatMap((script) =>
    JSON.parse(script.textContent)["@graph"] || [],
  );
  const professionalService = graph.find(
    ({ "@type": type }) =>
      Array.isArray(type) && type.includes("ProfessionalService"),
  );
  const assetValuationService = graph.find(
    ({ "@id": id }) =>
      id === "https://www.sabirelsir.ae/ar/areas/khartoum#asset-valuation",
  );

  expect(professionalService.telephone).toBe("0912311241");
  expect(professionalService.email).toBe("sabir.elsir.eng.cons@gmail.com");
  expect(professionalService.address.addressLocality).toBe("Khartoum");
  expect(assetValuationService.serviceType).toBe("Asset valuation");
  expect(JSON.stringify(graph)).not.toMatch(/accreditation|rating/i);
});
