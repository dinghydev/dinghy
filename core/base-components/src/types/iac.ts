import z from 'zod'
import {
  RecordSchema,
  resolvable,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
} from './base.ts'

// Terraform / OpenTofu types
export const IacCategorySchema = z.enum([
  'resource',
  'data',
  'terraform',
  'provider',
  'none',
])

export const IacNodeSchema = z.object({
  _importId: ResolvableStringSchema.optional(),
  _inputSchema: z.instanceof(z.ZodType).optional(),
  _outputSchema: z.instanceof(z.ZodType).optional(),
  _stackResource: ResolvableBooleanSchema.optional(),
  _resource: RecordSchema.optional(),
  _data: RecordSchema.optional(),
  _terraform: RecordSchema.optional(),
  _provider: RecordSchema.optional(),
  _category: z.union([IacCategorySchema, resolvable(z.string())]).optional(),
})

export type IacNodeType = z.input<typeof IacNodeSchema>
