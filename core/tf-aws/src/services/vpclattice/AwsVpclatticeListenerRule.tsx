import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpclattice_listener_rule

export const InputSchema = z.object({
  listener_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  priority: resolvableValue(z.number()),
  service_identifier: resolvableValue(z.string()),
  action: resolvableValue(z.object({
    fixed_response: z.object({
      status_code: z.number(),
    }).optional(),
    forward: z.object({
      target_groups: z.object({
        target_group_identifier: z.string(),
        weight: z.number().optional(),
      }),
    }).optional(),
  })),
  id: resolvableValue(z.string().optional()),
  match: resolvableValue(z.object({
    http_match: z.object({
      method: z.string().optional(),
    }),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  rule_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpclatticeListenerRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_listener_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeListenerRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpclatticeListenerRule, node, id)

export const useAwsVpclatticeListenerRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpclatticeListenerRule, node, id)
