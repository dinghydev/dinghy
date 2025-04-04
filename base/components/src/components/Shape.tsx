import Node from "./Node.tsx";
import type { DiagramNodeProps } from "../types.ts";
/**
 * Shape component as the base to configure diagram shapes
 */
export function Shape(props: DiagramNodeProps) {
  return <Node {...props} />;
}
