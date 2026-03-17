import { Section, Slide } from "../config/schemas";
import { renderSection } from "./renderSection";

function assembleSections(sections: Section[], slide: Slide): string {
  return sections.map((section) => {
    const sectionHtml = renderSection(section, slide);
    if (sectionHtml.startsWith("<style>") || sectionHtml.endsWith("</style>")) {
      return sectionHtml;
    }
    return `<section>${sectionHtml}</section>`;
  }).join("\n");
}

export function assembleRawHtml(slide: Slide): string {
  return assembleSections(slide.sections ?? [], slide);
}
