import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Home from "../components/Home";

export default function Index(): ReactNode {
  return (
    <Layout
      title="Welcome"
      description="Diagram and Infrastructure as Code with React"
    >
      <Home />
    </Layout>
  );
}
