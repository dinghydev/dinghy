import z from 'zod'
import {
  RecordSchema,
  resolvable,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
  resolvableValue,
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
  _terraformId: ResolvableStringSchema.optional(),
  _importSchema: z.instanceof(z.ZodType).optional(),
  _inputSchema: z.instanceof(z.ZodType).optional(),
  _outputSchema: z.instanceof(z.ZodType).optional(),
  _stackResource: ResolvableBooleanSchema.optional(),
  _resource: RecordSchema.optional(),
  _data: RecordSchema.optional(),
  _terraform: RecordSchema.optional(),
  _provider: RecordSchema.optional(),
  _category: z.union([IacCategorySchema, resolvable(z.string())]).optional(),
  _components: RecordSchema.optional(),
  _configs: RecordSchema.optional(),
})

export const TfMetaSchema = z.object({
  depends_on: resolvableValue(z.string().array().optional()),
  count: resolvableValue(z.number().optional()),
  for_each: resolvableValue(
    z.union([z.set(z.any()), z.record(z.string(), z.any())]).optional(),
  ),
  lifecycle: resolvableValue(
    z.object(
      {
        create_before_destroy: z.boolean().optional(),
        prevent_destroy: z.boolean().optional(),
        ignore_changes: z.string().array().optional(),
        action_trigger: z.record(z.string(), z.any()).optional(),
        replace_triggered_by: z.string().array().optional(),
        precondition: z.object({
          condition: z.string(),
          error_message: z.string().optional(),
        }).optional(),
        postconditionp: z.object({
          condition: z.string(),
          error_message: z.string().optional(),
        }).optional(),
      },
    ).optional(),
  ),
  provider: resolvableValue(z.string().optional()),
})

export type IacNodeType = z.input<typeof IacNodeSchema>
