import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLbListenerRule } from './AwsLbListenerRule.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lb_listener_rule

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  listener_arn: resolvableValue(z.string().optional()),
  priority: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  action: z.object({
    order: z.number(),
    type: z.string(),
  }).optional().optional(),
  condition: z.object({
    host_header: z.object({
      regex_values: z.string().array(),
      values: z.string().array(),
    }).optional(),
    http_header: z.object({
      http_header_name: z.string(),
      regex_values: z.string().array(),
      values: z.string().array(),
    }).optional(),
    http_request_method: z.object({
      values: z.string().array(),
    }).optional(),
    path_pattern: z.object({
      regex_values: z.string().array(),
      values: z.string().array(),
    }).optional(),
    query_string: z.object({
      values: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
    }).optional(),
    source_ip: z.object({
      values: z.string().array(),
    }).optional(),
  }).array().optional().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transform: z.object({
    type: z.string(),
  }).array().optional().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLbListenerRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLbListenerRule
      _type='aws_lb_listener_rule'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLbListenerRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLbListenerRule, node, id)

export const useDataAwsLbListenerRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLbListenerRule, node, id)
