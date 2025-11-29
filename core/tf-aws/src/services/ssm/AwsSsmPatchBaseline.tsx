import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssm_patch_baseline

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  approval_rule: resolvableValue(
    z.object({
      approve_after_days: z.number().optional(),
      approve_until_date: z.string().optional(),
      compliance_level: z.string().optional(),
      enable_non_security: z.boolean().optional(),
    }).optional(),
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
    }).optional(),
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
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

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

export function AwsSsmPatchBaseline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsSsmPatchBaseline = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmPatchBaseline, node, id)

export const useAwsSsmPatchBaselines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmPatchBaseline, node, id)
