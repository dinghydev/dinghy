import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/load_balancer_listener_policy

export const InputSchema = z.object({
  policy_names: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  load_balancer_name: z.string().optional(),
  load_balancer_port: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLoadBalancerListenerPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_load_balancer_listener_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLoadBalancerListenerPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLoadBalancerListenerPolicy, node, id)

export const useAwsLoadBalancerListenerPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLoadBalancerListenerPolicy, node, id)
