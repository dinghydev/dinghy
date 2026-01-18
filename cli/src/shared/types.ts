import { z } from 'zod'

export interface Props {
  [key: string]: unknown
}
export const ItemSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  title: z.string(),
  disabled: z.boolean().optional(),
})
export type Item = z.output<typeof ItemSchema>

export const StackSchema = z.object({
  name: z.string(),
  title: z.string(),
  app: z.string(),
  sequence: z.number(),
  views: z.record(z.string(), ItemSchema.loose()).optional(),
  override: z.record(z.string(), z.any()).optional(),
  mrAutoDiff: z.boolean().default(true),
  mrAutoDeploy: z.boolean().default(false),
  mainAutoDiff: z.boolean().default(true),
  mainAutoDeploy: z.boolean().default(false),
})

export type StackType = z.output<typeof StackSchema>

export const StacksSchema = z.record(z.string(), StackSchema.loose())

export type Stacks = z.output<typeof StacksSchema>
