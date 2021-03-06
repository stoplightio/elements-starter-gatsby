import { StoplightProject } from "@stoplight/elements";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const StoplightProjectPage = () => {
  return (
    <Layout>
      <SEO title="Stoplight Elements" />

      <StoplightProject
        workspaceSlug="elements"
        projectSlug="studio-demo"
        basePath="elements"
        router={typeof window === "undefined" ? "memory" : "history"}
      />
    </Layout>
  );
};

export default StoplightProjectPage;
