import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: "en", resolvedLanguage: "en" },
  }),
  withTranslation: () => (Component) => Component,
}));

test("navigation and footer link to canonical internal URLs", () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
      <Footer />
    </MemoryRouter>
  );

  for (const path of ["about", "contact", "founder-profile", "services"]) {
    const links = container.querySelectorAll(`a[href="/${path}"]`);
    expect(links.length).toBeGreaterThan(1);
    expect(container.querySelector(`a[href="/${path[0].toUpperCase()}${path.slice(1)}"]`)).toBeNull();
  }
});

test("mobile navigation exposes and toggles its expanded state", () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const openButton = screen.getByRole("button", {
    name: "Open navigation menu",
  });

  expect(openButton).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(openButton);
  expect(
    screen.getByRole("button", { name: "Close navigation menu" }),
  ).toHaveAttribute("aria-expanded", "true");
  expect(container.querySelector("#primary-navigation")).toHaveClass("active");
});
