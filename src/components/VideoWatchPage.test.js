import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import VideoWatchPage from "./VideoWatchPage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ i18n: { language: "en" } }),
}));

test("video structured data includes the YouTube upload datetime and timezone", () => {
  render(
    <MemoryRouter>
      <VideoWatchPage />
    </MemoryRouter>
  );

  const scripts = Array.from(
    document.head.querySelectorAll('script[type="application/ld+json"]')
  );
  const video = scripts
    .map((script) => JSON.parse(script.textContent))
    .find((item) => item["@type"] === "VideoObject");

  expect(video.uploadDate).toBe("2024-07-18T17:15:01-07:00");
  expect(Number.isNaN(Date.parse(video.uploadDate))).toBe(false);
  expect(video.embedUrl).toContain("kDAkQ_-998s");
});
