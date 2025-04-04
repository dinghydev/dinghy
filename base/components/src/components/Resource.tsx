import React from "react";
import { IacNodeProps } from "../types.ts";
import { Shape } from "./Shape.tsx";

/**
 * Resource component as the base to configure IaC based resources including
 * data type resources
 */
export function Resource(props: IacNodeProps) {
  return <Shape {...props} />;
}
