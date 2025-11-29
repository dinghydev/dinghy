import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fms_policy

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  exclude_resource_tags: resolvableValue(z.boolean()),
  name: resolvableValue(z.string()),
  delete_all_policy_resources: resolvableValue(z.boolean().optional()),
  delete_unused_fm_managed_resources: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  exclude_map: resolvableValue(
    z.object({
      account: z.string().array().optional(),
      orgunit: z.string().array().optional(),
    }).optional(),
  ),
  include_map: resolvableValue(
    z.object({
      account: z.string().array().optional(),
      orgunit: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  remediation_enabled: resolvableValue(z.boolean().optional()),
  resource_set_ids: resolvableValue(z.string().array().optional()),
  resource_tag_logical_operator: resolvableValue(z.string().optional()),
  resource_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  resource_type: resolvableValue(z.string().optional()),
  resource_type_list: resolvableValue(z.string().array().optional()),
  security_service_policy_data: resolvableValue(z.object({
    managed_service_data: z.string().optional(),
    type: z.string(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  policy_update_token: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsFmsPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fms_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFmsPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsFmsPolicy, node, id)

export const useAwsFmsPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsFmsPolicy, node, id)
