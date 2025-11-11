import { z } from 'zod'

export interface Props {
  [key: string]: unknown
}
export const ItemSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  title: z.string().optional(),
  disabled: z.boolean().optional(),
})
export type Item = z.output<typeof ItemSchema>

export const StackSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  env: z.string().optional(),
  title: z.string().optional(),
  app: z.string().optional(),
  sequence: z.number().optional(),
  stages: z.record(z.string(), ItemSchema.passthrough()).optional(),
  views: z.record(z.string(), ItemSchema.passthrough()).optional(),
  override: z.record(z.string(), z.any()).optional(),
  mrAutoDiff: z.boolean().default(true),
  mrAutoDeploy: z.boolean().default(false),
  mainAutoDiff: z.boolean().default(true),
  mainAutoDeploy: z.boolean().default(false),
})

export type StackType = z.output<typeof StackSchema>

export const StacksSchema = z.record(z.string(), StackSchema.passthrough())

export type Stacks = z.output<typeof StacksSchema>

export const DEFAULT_APP = 'app'
export const DEFAULT_STAGE = 'main'
export const DEFAULT_VIEW = 'overview'
