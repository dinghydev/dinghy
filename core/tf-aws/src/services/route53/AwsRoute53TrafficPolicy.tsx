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

export const AwsRoute53TrafficPolicyInputSchema = TfMetaSchema.extend({
  document: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
})

export const AwsRoute53TrafficPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  type: z.string().optional(),
  version: z.number().optional(),
})

export type AwsRoute53TrafficPolicyInputProps =
  & z.input<typeof AwsRoute53TrafficPolicyInputSchema>
  & NodeProps

export type AwsRoute53TrafficPolicyOutputProps =
  & z.output<typeof AwsRoute53TrafficPolicyOutputSchema>
  & z.output<typeof AwsRoute53TrafficPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_traffic_policy

export function AwsRoute53TrafficPolicy(
  props: Partial<AwsRoute53TrafficPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_traffic_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53TrafficPolicyInputSchema}
      _outputSchema={AwsRoute53TrafficPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53TrafficPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53TrafficPolicyOutputProps>(
    AwsRoute53TrafficPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53TrafficPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53TrafficPolicyOutputProps>(
    AwsRoute53TrafficPolicy,
    idFilter,
    baseNode,
    optional,
  )
