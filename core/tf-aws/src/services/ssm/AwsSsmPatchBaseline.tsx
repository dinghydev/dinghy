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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  json: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ssm_patch_baseline

export function AwsSsmPatchBaseline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_patch_baseline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmPatchBaseline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSsmPatchBaseline, idFilter, baseNode, optional)

export const useAwsSsmPatchBaselines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsSsmPatchBaseline, idFilter, baseNode, optional)
