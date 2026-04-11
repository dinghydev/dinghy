import { toId } from "../utils/toId";
import { isAttribute } from "./renderSection";

export function attr(k: string, v: unknown): string {
  const key = k.startsWith("_") ? k.slice(1) : k;
  return v === "" || v === true ? key : `${key}="${v}"`;
}

export function sectionTitle(
  section: Record<string, unknown>,
): string | undefined {
  const title = section.title || section.h2 || section.h1;
  if (typeof title === "string") {
    return title;
  }
  return undefined;
}

export function sectionId(
  section: Record<string, unknown>,
): string | undefined {
  if (section.id) {
    return section.id as string;
  }
  const keySource = section.badge as string || sectionTitle(section);
  if (typeof keySource === "string" && keySource) {
    return toId(keySource);
  }
  return undefined;
}

export function sectionTag(
  section: Record<string, unknown>,
): string {
  const keys = new Set<string>();
  const atAttrs = Object.entries(section)
    .filter(([k]) => isAttribute(k))
    .map(([k, v]) => {
      keys.add(k);
      return attr(k, v);
    });
  if (!keys.has("id")) {
    const id = sectionId(section);
    if (id) {
      atAttrs.push(`id="${id}"`);
    }
  }
  return atAttrs.length ? `<section ${atAttrs.join(" ")}>` : "<section>";
}
