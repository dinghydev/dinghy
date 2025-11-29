import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_traffic_policy_document

export const InputSchema = z.object({
  endpoint: resolvableValue(
    z.object({
      id: z.string(),
      region: z.string().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  record_type: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      id: z.string(),
      type: z.string().optional(),
    }).array().optional(),
  ),
  start_endpoint: resolvableValue(z.string().optional()),
  start_rule: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  json: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRoute53TrafficPolicyDocument(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_traffic_policy_document'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53TrafficPolicyDocument = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsRoute53TrafficPolicyDocument, node, id)

export const useDataAwsRoute53TrafficPolicyDocuments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsRoute53TrafficPolicyDocument, node, id)
