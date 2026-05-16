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

export const AwsRoute53TrafficPolicyInstanceInputSchema = TfMetaSchema.extend({
  hosted_zone_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  traffic_policy_id: resolvableValue(z.string()),
  traffic_policy_version: resolvableValue(z.number()),
  ttl: resolvableValue(z.number()),
})

export const AwsRoute53TrafficPolicyInstanceOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsRoute53TrafficPolicyInstanceInputProps =
  & z.input<typeof AwsRoute53TrafficPolicyInstanceInputSchema>
  & NodeProps

export type AwsRoute53TrafficPolicyInstanceOutputProps =
  & z.output<typeof AwsRoute53TrafficPolicyInstanceOutputSchema>
  & z.output<typeof AwsRoute53TrafficPolicyInstanceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_traffic_policy_instance

export function AwsRoute53TrafficPolicyInstance(
  props: Partial<AwsRoute53TrafficPolicyInstanceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_traffic_policy_instance'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53TrafficPolicyInstanceInputSchema}
      _outputSchema={AwsRoute53TrafficPolicyInstanceOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53TrafficPolicyInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53TrafficPolicyInstanceOutputProps>(
    AwsRoute53TrafficPolicyInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53TrafficPolicyInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53TrafficPolicyInstanceOutputProps>(
    AwsRoute53TrafficPolicyInstance,
    idFilter,
    baseNode,
    optional,
  )
