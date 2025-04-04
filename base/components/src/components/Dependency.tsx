import React from "react";
import Node from "./Node.tsx";
import type {
  DependencyProps,
  NodeTree,
  Props,
  ReactNodeTree,
} from "../types.ts";
import { useNodeContext } from "../contexts/NodeContext.tsx";
import type { ReactNode } from "react";

export const processDependencyAttributes = (
  props: Partial<ReactNodeTree>,
  parent: NodeTree,
  depProps: Props = {},
) => {
  if (props._dependsOn || props._dependsBy) {
    if (!props.children) {
      props.children = [];
    } else if (!Array.isArray(props.children)) {
      props.children = [props.children];
    } else {
      props.children = [...props.children];
    }

    const addDependency = (value: string, nodeIsSource: boolean) => {
      const typedValue = value as unknown as NodeTree;
      (props.children as ReactNode[]).push(
        <Dependency
          {...depProps}
          _source={nodeIsSource ? parent : typedValue}
          _target={nodeIsSource ? typedValue : parent}
          key={value}
        />,
      );
    };

    const collectDepends = (field: string, nodeIsSource: boolean) => {
      const value = (props as any)[field];
      if (value) {
        if (typeof value === "string") {
          addDependency(value, nodeIsSource);
        } else if (Array.isArray(value)) {
          value.map((dep: string) => addDependency(dep, nodeIsSource));
        } else {
          throw new Error(
            `${field} must be a string or string array of string`,
          );
        }
        delete (props as any)[field];
      }
    };

    collectDepends("_dependsOn", true);
    collectDepends("_dependsBy", false);
  }
};

/**
 * The helper component to create a dependency between two nodes.
 * It can be used directly or use _dependsOn|_dependsBy attribute on any Node.
 */
export function Dependency(props: Partial<DependencyProps>) {
  if (props._dependsOn || props._dependsBy) {
    const parent = useNodeContext();
    const propsHolder = { ...props };
    const depProps = { ...props, children: [] };
    delete depProps._dependsOn;
    delete depProps._dependsBy;
    processDependencyAttributes(propsHolder, parent, depProps);
    return propsHolder.children;
  }
  return <Node {...props} _isDependency={true} />;
}
