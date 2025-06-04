import type { Element } from "./../../cli/src/types.ts";

export function createModel(_args: any, elements: Element[]) {
  const region = elements.pop()!;
  region.children = elements;
  return { tag: "AwsCloud", children: [region] };
}
