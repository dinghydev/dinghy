import { z } from "zod";
import { ZoomAndPanSectionSchema, ZoomRegionSchema } from "../config/schemas";
import { SLIDE_H, SLIDE_W } from "../config/constants";
import { toId } from "../utils/toId";
import { sectionId, sectionTag, sectionTitle } from "./sectionTag";

export function renderZoomAndPanSection(
  zoomSection: z.infer<typeof ZoomAndPanSectionSchema>,
): string {
  const src = zoomSection.img as string;
  const imgW = zoomSection.width, imgH = zoomSection.height;

  function getLayout(region?: z.infer<typeof ZoomRegionSchema>) {
    if (
      region?.x1 !== undefined && region?.y1 !== undefined &&
      region?.x2 !== undefined &&
      region?.y2 !== undefined
    ) {
      const scale = Math.min(
        (SLIDE_W * 0.9) / (region?.x2 - region?.x1),
        (SLIDE_H * 0.9) / (region?.y2 - region?.y1),
      );
      const cx = (region?.x1 + region?.x2) / 2,
        cy = (region?.y1 + region?.y2) / 2;
      const W = Math.round(imgW * scale), H = Math.round(imgH * scale);
      const X = Math.round(SLIDE_W / 2 - cx * scale),
        Y = Math.round(SLIDE_H / 2 - cy * scale);
      const ovX = Math.round(X + region?.x1 * scale),
        ovY = Math.round(Y + region?.y1 * scale);
      const ovW = Math.round((region?.x2 - region?.x1) * scale),
        ovH = Math.round((region?.y2 - region?.y1) * scale);
      const imgStyle =
        `position:absolute;width:${W}px;height:${H}px;left:${X}px;top:${Y}px;max-width:none;max-height:none`;
      const overlay = region?.overlay ?? zoomSection.overlay;
      const ovHtml =
        `\n          <div class="zp-overlay" style="position:absolute;box-sizing:border-box;left:${ovX}px;top:${ovY}px;width:${ovW}px;height:${ovH}px;${overlay};"></div>`;
      console.log("overlay", overlay, zoomSection.img, zoomSection.overlay);
      return { imgStyle, ovHtml };
    } else {
      const scale = Math.min((SLIDE_W * 0.9) / imgW, (SLIDE_H * 0.9) / imgH);
      const W = Math.round(imgW * scale), H = Math.round(imgH * scale);
      const X = Math.round((SLIDE_W - W) / 2),
        Y = Math.round((SLIDE_H - H) / 2);
      return {
        imgStyle:
          `position:absolute;width:${W}px;height:${H}px;left:${X}px;top:${Y}px;max-width:none;max-height:none`,
        ovHtml: "",
      };
    }
  }

  // Each region becomes its own data-auto-animate section so RevealJS morphs
  // the <img> between slides — visible in overview and transitions are handled
  // natively without any JS.
  const renderSubSection = (
    s: unknown,
    region?: z.infer<typeof ZoomRegionSchema>,
  ): string => {
    const section = s as Record<string, unknown>;
    const l = region ? getLayout(region) : getLayout();
    const rawTitle = sectionTitle(section);
    const titleHtml = rawTitle
      ? `\n          <h2 class="zp-title">${rawTitle}</h2>`
      : "";
    section["data-auto-animate"] = true;
    section["data-auto-animate-duration"] ??= "1";
    section["data-auto-animate-easing"] ??= "cubic-bezier(0.45,0,0.55,1)";
    section["class"] = `${
      section["class"] ? section["class"] + " " : ""
    }zp-section`;
    return `${sectionTag(section)}
    <div class="zp-container" style="height:${SLIDE_H}px;">
            <img class="zp-img" data-id="zp-img-${
      sectionId(zoomSection) || toId(zoomSection.img)
    }" src="${src}" style="${l.imgStyle}" />${l.ovHtml}
          </div>${titleHtml}</section>`;
  };

  const subSections = [
    ...(zoomSection["skip-full-view"] ? [] : [renderSubSection(zoomSection)]),
    ...zoomSection.sections.map((r) => renderSubSection(r, r)),
  ].join("\n");
  return subSections;
}
