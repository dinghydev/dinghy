import { z } from "zod";
import { DEFAULT_REVEAL_CONFIG } from "./constants";

export const PluginSchema = z.object({
  name: z.string(),
  path: z.string().optional(),
});

export const StandardSectionSchema: z.ZodType<{
  file?: string;
  sections?: unknown[];
  [key: string]: unknown;
}> = z.object({
  file: z.string().optional(),
  sections: z.array(z.lazy(() => SectionSchema)).optional(),
}).loose();

export const ZoomRegionSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  overlay: z.string().optional(),
  x1: z.number().optional(),
  y1: z.number().optional(),
  x2: z.number().optional(),
  y2: z.number().optional(),
});

export const ZoomAndPanSectionSchema = z.object({
  type: z.literal("zoom-and-pan"),
  img: z.string(),
  width: z.number(),
  height: z.number(),
  "skip-full-view": z.boolean().default(false),
  overlay: z.string().default(
    "background:rgba(144,238,144,0.2);border:2px solid rgba(144,238,144,0.6);",
  ),
  sections: z.array(ZoomRegionSchema).default([]),
}).loose();

export const SectionSchema: z.ZodType<
  | z.infer<typeof ZoomAndPanSectionSchema>
  | z.infer<typeof StandardSectionSchema>
> = z.preprocess(
  (val) => {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      const obj = val as Record<string, unknown>;
      if (obj.type === undefined) {
        if (obj.width !== undefined && obj.height !== undefined) {
          return { ...obj, type: "zoom-and-pan" };
        }
      }
    }
    return val;
  },
  z.union([
    ZoomAndPanSectionSchema,
    StandardSectionSchema,
  ]),
);

// RevealJS config options — all optional, defaults match https://revealjs.com/config/
export const RevealConfigSchema = z.object({
  // Dimensions
  width: z.union([z.number(), z.string()]).optional(), // default: 960
  height: z.union([z.number(), z.string()]).optional(), // default: 700
  margin: z.number().optional(), // default: 0.04
  minScale: z.number().optional(), // default: 0.2
  maxScale: z.number().optional(), // default: 2.0

  // Navigation controls
  controls: z.boolean().optional(), // default: true
  controlsTutorial: z.boolean().optional(), // default: true
  controlsLayout: z.enum(["bottom-right", "edges"]).optional(), // default: 'bottom-right'
  controlsBackArrows: z.enum(["faded", "hidden", "visible"]).optional(), // default: 'faded'
  progress: z.boolean().optional(), // default: true
  slideNumber: z.union([
    z.boolean(),
    z.enum(["h.v", "h/v", "c", "c/t"]),
  ]).optional(), // default: false
  showSlideNumber: z.enum(["all", "print", "speaker"]).optional(), // default: 'all'

  // URL / history
  theme: z.string().default(DEFAULT_REVEAL_CONFIG.theme), // RevealJS theme name, e.g. 'black', 'white', 'moon'
  hash: z.boolean().default(DEFAULT_REVEAL_CONFIG.hash), // default: true
  hashOneBasedIndex: z.boolean().optional(), // default: false
  respondToHashChanges: z.boolean().optional(), // default: true
  history: z.boolean().optional(), // default: false

  // Keyboard & input
  keyboard: z.boolean().optional(), // default: true
  touch: z.boolean().optional(), // default: true
  mouseWheel: z.boolean().optional(), // default: false
  disableLayout: z.boolean().optional(), // default: false

  // Presentation flow
  loop: z.boolean().optional(), // default: false
  rtl: z.boolean().optional(), // default: false
  navigationMode: z.enum(["default", "linear", "grid"]).optional(), // default: 'default'
  shuffle: z.boolean().optional(), // default: false
  fragments: z.boolean().optional(), // default: true
  fragmentInURL: z.boolean().optional(), // default: true

  // Appearance
  center: z.boolean().optional(), // default: true
  overview: z.boolean().optional(), // default: true
  embedded: z.boolean().optional(), // default: false

  // Transitions
  transition: z.enum(["none", "fade", "slide", "convex", "concave", "zoom"])
    .optional(), // default: 'slide'
  transitionSpeed: z.enum(["default", "fast", "slow"]).optional(), // default: 'default'
  backgroundTransition: z.enum([
    "none",
    "fade",
    "slide",
    "convex",
    "concave",
    "zoom",
  ]).optional(), // default: 'fade'

  // Auto-animate
  autoAnimate: z.boolean().optional(), // default: true
  autoAnimateDuration: z.number().optional(), // default: 1.0
  autoAnimateEasing: z.string().optional(), // default: 'ease'
  autoAnimateUnmatched: z.boolean().optional(), // default: true

  // Auto-slide
  autoSlide: z.number().optional(), // default: 0 (disabled)
  autoSlideStoppable: z.boolean().optional(), // default: true
  defaultTiming: z.number().optional(), // default: null

  // Speaker notes
  showNotes: z.boolean().optional(), // default: false
  help: z.boolean().optional(), // default: true
  pause: z.boolean().optional(), // default: true

  // PDF export
  pdfMaxPagesPerSlide: z.number().optional(), // default: 1
  pdfSeparateFragments: z.boolean().optional(), // default: true
  pdfPageHeightOffset: z.number().optional(), // default: -1

  // View distance (preloading)
  viewDistance: z.number().optional(), // default: 3
  mobileViewDistance: z.number().optional(), // default: 2

  // Cursor
  hideInactiveCursor: z.boolean().optional(), // default: true
  hideCursorTime: z.number().optional(), // default: 5000

  // Plugins
  plugins: z.array(PluginSchema).default(DEFAULT_REVEAL_CONFIG.plugins),
});

export type RevealConfig = z.infer<typeof RevealConfigSchema>;

export const RevealGlobalConfigSchema = RevealConfigSchema.extend({
  baseUrl: z.string().default("/"),
  generateSlidesIndex: z.boolean().default(true),
  trailingSlash: z.boolean().default(false),
  inlineAssets: z.boolean().default(true),
  filter: z.string().optional(),
});

export type RevealGlobalConfig = z.infer<typeof RevealGlobalConfigSchema>;

export const SlideSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  slug: z.string().optional(),
  config: RevealConfigSchema.loose().default(DEFAULT_REVEAL_CONFIG),
  sections: z.array(SectionSchema).optional(),
});

export type Section = z.infer<typeof SectionSchema>;
export type Slide = z.infer<typeof SlideSchema>;
