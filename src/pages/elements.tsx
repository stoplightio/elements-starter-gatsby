import { StoplightProject } from "@stoplight/elements";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const StoplightProjectPage = () => {
  return (
    <Layout>
      <SEO title="Stoplight Elements" />

      <StoplightProject
        workspace="https://elements.stoplight.io"
        project="elements"
        branch="beta"
        basePath="elements"
      />
    </Layout>
  );
};

export default StoplightProjectPage;
