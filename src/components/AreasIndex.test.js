import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import AreasIndex from "./AreasIndex";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { language: "en" },
  }),
}));

test("renders the expanded areas introduction and SEO metadata", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <AreasIndex />
      </MemoryRouter>
    </HelmetProvider>,
  );

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Engineering Consultancy Services Across the UAE and Sudan",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Sabir Elsir Engineering Consultants provides professional engineering consultancy, architectural design, and project-related services across the United Arab Emirates and Sudan. With experience dating back to 2001, we serve residential, commercial, and industrial clients in key locations, including Sharjah, Ajman, and Khartoum.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "In the UAE, we provide engineering consultancy services in Sharjah, Ajman, and surrounding areas, supporting projects with architectural design, civil and structural engineering, interior design, engineering supervision, and project management.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "In Sudan, our consultancy serves clients in Khartoum and surrounding areas, offering architectural and engineering consultancy, urban planning, and asset valuation services.",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Whether you are planning a new development, modifying an existing property, or seeking professional engineering consultancy, Sabir Elsir Engineering Consultants provides solutions tailored to your project's location and requirements.",
    ),
  ).toBeInTheDocument();
  expect(document.title).toBe(
    "Engineering Consultancy Across the UAE & Sudan | Sabir Elsir",
  );
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    "content",
    "Sabir Elsir Engineering Consultants provides engineering consultancy, architectural design, and project-related services in the UAE and Sudan.",
  );
});
