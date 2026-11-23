import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import i18n from "./locales/i18n";
import App from "./App";

test("renders the English home page hero", async () => {
  await i18n.changeLanguage("en");
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );
  expect(
    screen.getByRole("heading", {
      name: "Sabir Elsir Engineering Consultants",
    }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Engineering Consultancy, Architectural Design & Project Management in the UAE and Sudan",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Established in 2001, Sabir Elsir Engineering Consultants provides integrated architectural design, civil and structural engineering, engineering supervision, and project management services in Sharjah, Ajman, and across the UAE, with professional consultancy services in Khartoum, Sudan.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Combining engineering expertise, practical design solutions, and a commitment to quality, we support residential, commercial, and industrial developments from initial planning and design through project execution.",
    ),
  ).toBeInTheDocument();
});

test("renders the Arabic translation of the home page hero", async () => {
  await i18n.changeLanguage("ar");
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "صابر السر للاستشارات الهندسية",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "الاستشارات الهندسية والتصميم المعماري وإدارة المشاريع في الإمارات والسودان",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "تأسس مكتب صابر السر للاستشارات الهندسية عام 2001، ويقدم خدمات متكاملة تشمل التصميم المعماري والهندسة المدنية والإنشائية والإشراف الهندسي وإدارة المشاريع في الشارقة وعجمان ومختلف أنحاء الإمارات، إلى جانب خدمات استشارية مهنية في الخرطوم، السودان.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "نجمع بين الخبرة الهندسية وحلول التصميم العملية والالتزام بالجودة لدعم المشاريع السكنية والتجارية والصناعية، بدءًا من مراحل التخطيط والتصميم الأولية وصولًا إلى تنفيذ المشاريع.",
    ),
  ).toBeInTheDocument();
});
