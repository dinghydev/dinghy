import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/load_balancer_policy

export const InputSchema = z.object({
  policy_attribute: resolvableValue(
    z.object({
      name: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  load_balancer_name: z.string().optional(),
  policy_name: z.string().optional(),
  policy_type_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLoadBalancerPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_load_balancer_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLoadBalancerPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLoadBalancerPolicy, node, id)

export const useAwsLoadBalancerPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLoadBalancerPolicy, node, id)
