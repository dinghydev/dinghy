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

export const AwsLoadBalancerPolicyInputSchema = TfMetaSchema.extend({
  load_balancer_name: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string()),
  policy_type_name: resolvableValue(z.string()),
  policy_attribute: resolvableValue(
    z.object({
      name: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsLoadBalancerPolicyOutputSchema = z.object({
  id: z.string().optional(),
  load_balancer_name: z.string().optional(),
  policy_name: z.string().optional(),
  policy_type_name: z.string().optional(),
})

export type AwsLoadBalancerPolicyInputProps =
  & z.input<typeof AwsLoadBalancerPolicyInputSchema>
  & NodeProps

export type AwsLoadBalancerPolicyOutputProps =
  & z.output<typeof AwsLoadBalancerPolicyOutputSchema>
  & z.output<typeof AwsLoadBalancerPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/load_balancer_policy

export function AwsLoadBalancerPolicy(
  props: Partial<AwsLoadBalancerPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_load_balancer_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLoadBalancerPolicyInputSchema}
      _outputSchema={AwsLoadBalancerPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsLoadBalancerPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLoadBalancerPolicyOutputProps>(
    AwsLoadBalancerPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLoadBalancerPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLoadBalancerPolicyOutputProps>(
    AwsLoadBalancerPolicy,
    idFilter,
    baseNode,
    optional,
  )
