import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_traffic_policy_instance

export const InputSchema = z.object({
  hosted_zone_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  traffic_policy_id: resolvableValue(z.string()),
  traffic_policy_version: resolvableValue(z.number()),
  ttl: resolvableValue(z.number()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53TrafficPolicyInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_traffic_policy_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53TrafficPolicyInstance = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRoute53TrafficPolicyInstance, node, id)

export const useAwsRoute53TrafficPolicyInstances = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRoute53TrafficPolicyInstance, node, id)
