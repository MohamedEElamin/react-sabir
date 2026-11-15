import React from "react";
import { render } from "@testing-library/react";
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

test("navigation and footer link to the canonical about and contact URLs", () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
      <Footer />
    </MemoryRouter>
  );

  for (const path of ["about", "contact"]) {
    const links = container.querySelectorAll(`a[href="/${path}"]`);
    expect(links.length).toBeGreaterThan(1);
    expect(container.querySelector(`a[href="/${path[0].toUpperCase()}${path.slice(1)}"]`)).toBeNull();
  }
});
