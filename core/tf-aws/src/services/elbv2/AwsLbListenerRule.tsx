import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_listener_rule

export const InputSchema = z.object({
  listener_arn: resolvableValue(z.string()),
  action: resolvableValue(z.object({
    order: z.number().optional(),
    target_group_arn: z.string().optional(),
    type: z.string(),
  })),
  condition: resolvableValue(
    z.object({
      host_header: z.object({
        regex_values: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      http_header: z.object({
        http_header_name: z.string(),
        regex_values: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      http_request_method: z.object({
        values: z.string().array(),
      }).optional(),
      path_pattern: z.object({
        regex_values: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      query_string: z.object({
        key: z.string().optional(),
        value: z.string(),
      }).array().optional(),
      source_ip: z.object({
        values: z.string().array(),
      }).optional(),
    }).array(),
  ),
  priority: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  transform: resolvableValue(
    z.object({
      type: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLbListenerRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_listener_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsLbListenerRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLbListenerRule, node, id)

export const useAwsLbListenerRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLbListenerRule, node, id)
