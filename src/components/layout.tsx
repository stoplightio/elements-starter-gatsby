import "@stoplight/elements/styles/elements.min.css";
import "./layout.css";

import React from "react";

import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
