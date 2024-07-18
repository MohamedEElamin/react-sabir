// withTranslation.js
import React from "react";
import { withTranslation } from "react-i18next";

const withTrans = (Component) => {
  return withTranslation()((props) => <Component {...props} />);
};

export default withTrans;
