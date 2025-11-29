import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/proxy_protocol_policy

export const InputSchema = z.object({
  instance_ports: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  load_balancer: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsProxyProtocolPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_proxy_protocol_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsProxyProtocolPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsProxyProtocolPolicy, node, id)

export const useAwsProxyProtocolPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsProxyProtocolPolicy, node, id)
