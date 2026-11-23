export const ARABIC_WAREHOUSE_PATH =
  "/ar/warehouse-factory-workshop-modification-drawings-sharjah";
export const ENGLISH_WAREHOUSE_PATH =
  "/services/warehouse-factory-workshop-modification-drawings-sharjah";

export function getLanguageFromPath(pathname) {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function getLocalizedPath(path, language) {
  if (typeof path !== "string" || !path.startsWith("/")) return path;

  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex < 0 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex < 0 ? "" : path.slice(suffixIndex);

  if (pathname === ARABIC_WAREHOUSE_PATH) {
    return `${language === "ar" ? ARABIC_WAREHOUSE_PATH : ENGLISH_WAREHOUSE_PATH}${suffix}`;
  }
  if (pathname === ENGLISH_WAREHOUSE_PATH) {
    return `${language === "ar" ? ARABIC_WAREHOUSE_PATH : ENGLISH_WAREHOUSE_PATH}${suffix}`;
  }

  const englishPath =
    pathname === "/ar" ? "/" : pathname.startsWith("/ar/") ? pathname.slice(3) : pathname;
  const localizedPath =
    language === "ar"
      ? englishPath === "/"
        ? "/ar"
        : `/ar${englishPath}`
      : englishPath;

  return `${localizedPath}${suffix}`;
}
