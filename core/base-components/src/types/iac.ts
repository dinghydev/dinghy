import z from 'zod'
import {
  RecordSchema,
  resolvable,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
  StringOrArraySchema,
} from './base.ts'

/**
# IaC

Infrastructure as Code specific attributes

## IacCategorySchema

Type of category for the IaC node

 */
export const IacCategorySchema = z.enum([
  'resource',
  'data',
  'terraform',
  'provider',
])

export const IacNodeSchema = z.object({
  _stage: StringOrArraySchema.optional().describe(
    `Only selected stage will be rendered.`,
  ),
  _importId: ResolvableStringSchema.optional(),
  _importSchema: z.instanceof(z.ZodType).optional(),
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
