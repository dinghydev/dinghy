import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/waf_web_acl

export const InputSchema = z.object({
  default_action: resolvableValue(z.object({
    type: z.string(),
  })),
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  logging_configuration: resolvableValue(
    z.object({
      log_destination: z.string(),
    }).optional(),
  ),
  rules: resolvableValue(
    z.object({
      priority: z.number(),
      rule_id: z.string(),
      type: z.string().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafWebAcl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_web_acl'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafWebAcl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafWebAcl, node, id)

export const useAwsWafWebAcls = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafWebAcl, node, id)
