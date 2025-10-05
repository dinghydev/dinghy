import z from 'zod'
import { RecordSchema, resolvable, ResolvableBooleanSchema } from './base.ts'
import { DiagramNodeProps } from './diagrams.ts'

// Terraform / OpenTofu types
export const IacCategorySchema = z.enum([
  'resource',
  'data',
  'terraform',
  'provider',
  'none',
])

export const IacNodeSchema = z.object({
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
export type IacNodeProps = IacNodeType & DiagramNodeProps
