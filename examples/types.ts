import z from "zod";
import { Stack } from "@diac/base-components";

export const ExampleSchema = z.object({
  title: z.string().optional(),
  slag: z.string().optional(),
  order: z.number().default(1000),
  code: z.string().optional(),
  options: z.any().optional(),
  packagePath: z.string().optional(),
  outputPath: z.string().optional(),
  private: z.boolean().default(false),
  App: z.any().optional(),
  stacks: z.any().array().optional(),
  tags: z.string().array().optional(),
});

export type ExampleType = z.input<typeof ExampleSchema>;

export type AppStackResult = {
  app: ExampleType;
  stack: Stack;
  result: {
    success: boolean;
    png?: string;
    reason?: unknown;
  };
};
