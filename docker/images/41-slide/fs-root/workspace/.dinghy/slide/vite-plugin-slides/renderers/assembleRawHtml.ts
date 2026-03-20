import { Context } from "../config/context";
import { Section, Slide } from "../config/schemas";
import { renderSection } from "./renderSection";

function assembleSections(
  sections: Section[],
  slide: Slide,
  ctx: Context,
): string {
  return sections.map((section) => {
    const sectionHtml = renderSection(section, slide, ctx);
    if (sectionHtml.startsWith("<style>") || sectionHtml.endsWith("</style>")) {
      return sectionHtml;
    }
    return `<section>${sectionHtml}</section>`;
  }).join("\n");
}

export function assembleRawHtml(slide: Slide, ctx: Context): string {
  return assembleSections(slide.sections ?? [], slide, ctx);
}
