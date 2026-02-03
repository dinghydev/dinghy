import z from 'zod'
import {
  RecordSchema,
  ResolvableStringSchema,
  resolvableValue,
} from './base.ts'

/**
# IaC

Infrastructure as Code specific attributes

## IacCategorySchema

Type of category for the IaC node

 */
export const IacCategorySchema = z.enum([
  'terraform',
  'provider',
  'resource',
  'data',
  'ephemeral',
  'output',
])

/**
## IacNodeSchema

IaC node attributes.

 */
export const IacNodeSchema = z.object({
  _terraformId: ResolvableStringSchema.optional().describe(
    'Terraform ID of the resource',
  ),
  _importSchema: z.instanceof(z.ZodType).optional().describe(
    'Import schema of the resource',
  ),
  _inputSchema: z.instanceof(z.ZodType).optional().describe(
    'Input schema of the resource',
  ),
  _outputSchema: z.instanceof(z.ZodType).optional().describe(
    'Output schema of the resource',
  ),
  _category: z.union([IacCategorySchema, IacCategorySchema.array()]).optional()
    .describe('Category of the terraform object'),
  _components: RecordSchema.optional().describe(
    'Components of the componsite component',
  ),
})

/**
## TfMetaSchema

Terraform [meta](https://developer.hashicorp.com/terraform/language/meta-arguments) attributes.

 */
export const TfMetaSchema = z.object({
  depends_on: resolvableValue(z.string().array()).optional(),
  count: resolvableValue(z.number()).optional(),
  for_each: resolvableValue(
    z.union([z.set(z.any()), z.record(z.string(), z.any())]),
  ).optional(),
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
    ),
  ).optional(),
  provider: resolvableValue(z.string()).optional(),
})

export type IacNodeType = z.input<typeof IacNodeSchema>
