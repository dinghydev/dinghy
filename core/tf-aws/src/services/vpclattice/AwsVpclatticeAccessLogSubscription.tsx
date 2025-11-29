import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpclattice_access_log_subscription

export const InputSchema = z.object({
  destination_arn: resolvableValue(z.string()),
  resource_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  service_network_log_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  resource_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpclatticeAccessLogSubscription(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_access_log_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeAccessLogSubscription = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsVpclatticeAccessLogSubscription, node, id)

export const useAwsVpclatticeAccessLogSubscriptions = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsVpclatticeAccessLogSubscription, node, id)
