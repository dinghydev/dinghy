import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/load_balancer_backend_server_policy

export const InputSchema = z.object({
  policy_names: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  instance_port: z.number().optional(),
  load_balancer_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLoadBalancerBackendServerPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_load_balancer_backend_server_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLoadBalancerBackendServerPolicy = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsLoadBalancerBackendServerPolicy, node, id)

export const useAwsLoadBalancerBackendServerPolicys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsLoadBalancerBackendServerPolicy, node, id)
