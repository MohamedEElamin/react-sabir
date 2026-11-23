import {
  ARABIC_WAREHOUSE_PATH,
  ENGLISH_WAREHOUSE_PATH,
  getLanguageFromPath,
  getLocalizedPath,
} from "./localizedRoutes";

test.each([
  ["/", "ar", "/ar"],
  ["/about", "ar", "/ar/about"],
  ["/ar/about", "en", "/about"],
  ["/ar/faq?topic=approvals", "en", "/faq?topic=approvals"],
])("localizes %s to %s as %s", (path, language, expected) => {
  expect(getLocalizedPath(path, language)).toBe(expected);
});

test("maps the warehouse page between its paired language URLs", () => {
  expect(getLocalizedPath(ENGLISH_WAREHOUSE_PATH, "ar")).toBe(
    ARABIC_WAREHOUSE_PATH,
  );
  expect(getLocalizedPath(ARABIC_WAREHOUSE_PATH, "en")).toBe(
    ENGLISH_WAREHOUSE_PATH,
  );
});

test("detects Arabic routes without matching unrelated /ar-prefixed slugs", () => {
  expect(getLanguageFromPath("/ar")).toBe("ar");
  expect(getLanguageFromPath("/ar/about")).toBe("ar");
  expect(getLanguageFromPath("/areas/arctic")).toBe("en");
});
