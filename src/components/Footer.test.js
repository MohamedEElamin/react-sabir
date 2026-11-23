import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: "en" },
  }),
}));

test("renders the areas links as a peer footer column", () => {
  const { container } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
  const areasHeading = screen.getByRole("heading", {
    name: "Areas We Serve",
  });
  const areasColumn = areasHeading.parentElement;
  const columns = container.querySelectorAll(
    ".footer-link-wrapper > .footer-link-items",
  );

  expect(columns).toHaveLength(4);
  expect(areasColumn.parentElement).toHaveClass("footer-link-wrapper");
  expect(
    within(areasColumn).getByRole("link", { name: "Areas We Serve" }),
  ).toHaveAttribute("href", "/areas");
  expect(
    within(areasColumn).getByRole("link", { name: "Sharjah UAE" }),
  ).toHaveAttribute("href", "/areas/sharjah");
  expect(
    within(areasColumn).getByRole("link", { name: "Ajman UAE" }),
  ).toHaveAttribute("href", "/areas/ajman");
  expect(
    within(areasColumn).getByRole("link", { name: "Khartoum Sudan" }),
  ).toHaveAttribute("href", "/areas/khartoum");
});
