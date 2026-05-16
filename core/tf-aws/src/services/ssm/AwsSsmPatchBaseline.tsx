import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSsmPatchBaselineInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  approval_rule: resolvableValue(
    z.object({
      approve_after_days: z.number().optional(),
      approve_until_date: z.string().optional(),
      compliance_level: z.string().optional(),
      enable_non_security: z.boolean().optional(),
      patch_filter: z.object({
        key: z.string(),
        values: z.string().array(),
      }).array(),
    }).array().optional(),
  ),
  approved_patches: resolvableValue(z.string().array().optional()),
  approved_patches_compliance_level: resolvableValue(z.string().optional()),
  approved_patches_enable_non_security: resolvableValue(z.boolean().optional()),
  available_security_updates_compliance_status: resolvableValue(
    z.string().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  global_filter: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  operating_system: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rejected_patches: resolvableValue(z.string().array().optional()),
  rejected_patches_action: resolvableValue(z.string().optional()),
  source: resolvableValue(
    z.object({
      configuration: z.string(),
      name: z.string(),
      products: z.string().array(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSsmPatchBaselineOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  json: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSsmPatchBaselineImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsmPatchBaselineInputProps =
  & z.input<typeof AwsSsmPatchBaselineInputSchema>
  & z.input<typeof AwsSsmPatchBaselineImportSchema>
  & NodeProps

export type AwsSsmPatchBaselineOutputProps =
  & z.output<typeof AwsSsmPatchBaselineOutputSchema>
  & z.output<typeof AwsSsmPatchBaselineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_patch_baseline

export function AwsSsmPatchBaseline(
  props: Partial<AwsSsmPatchBaselineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_patch_baseline'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmPatchBaselineInputSchema}
      _outputSchema={AwsSsmPatchBaselineOutputSchema}
      _importSchema={AwsSsmPatchBaselineImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmPatchBaseline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmPatchBaselineOutputProps>(
    AwsSsmPatchBaseline,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmPatchBaselines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmPatchBaselineOutputProps>(
    AwsSsmPatchBaseline,
    idFilter,
    baseNode,
    optional,
  )
