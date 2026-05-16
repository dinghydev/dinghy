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

export const AwsLoadBalancerListenerPolicyInputSchema = TfMetaSchema.extend({
  load_balancer_name: resolvableValue(z.string()),
  load_balancer_port: resolvableValue(z.number()),
  policy_names: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLoadBalancerListenerPolicyOutputSchema = z.object({
  id: z.string().optional(),
  load_balancer_name: z.string().optional(),
  load_balancer_port: z.number().optional(),
})

export type AwsLoadBalancerListenerPolicyInputProps =
  & z.input<typeof AwsLoadBalancerListenerPolicyInputSchema>
  & NodeProps

export type AwsLoadBalancerListenerPolicyOutputProps =
  & z.output<typeof AwsLoadBalancerListenerPolicyOutputSchema>
  & z.output<typeof AwsLoadBalancerListenerPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/load_balancer_listener_policy

export function AwsLoadBalancerListenerPolicy(
  props: Partial<AwsLoadBalancerListenerPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_load_balancer_listener_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLoadBalancerListenerPolicyInputSchema}
      _outputSchema={AwsLoadBalancerListenerPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsLoadBalancerListenerPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLoadBalancerListenerPolicyOutputProps>(
    AwsLoadBalancerListenerPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLoadBalancerListenerPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLoadBalancerListenerPolicyOutputProps>(
    AwsLoadBalancerListenerPolicy,
    idFilter,
    baseNode,
    optional,
  )
