import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "../utils/localizedRoutes";

function LocalizedLink({ to, ...props }) {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith("ar") ? "ar" : "en";
  const localizedTo = getLocalizedPath(to, language);

  return <Link {...props} to={localizedTo} />;
}

export default LocalizedLink;
