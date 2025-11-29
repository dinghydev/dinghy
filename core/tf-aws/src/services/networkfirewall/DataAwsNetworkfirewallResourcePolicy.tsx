import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkfirewallResourcePolicy } from './AwsNetworkfirewallResourcePolicy.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/networkfirewall_resource_policy

export const InputSchema = z.object({
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  policy: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsNetworkfirewallResourcePolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsNetworkfirewallResourcePolicy
      _type='aws_networkfirewall_resource_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkfirewallResourcePolicy = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsNetworkfirewallResourcePolicy, node, id)

export const useDataAwsNetworkfirewallResourcePolicys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsNetworkfirewallResourcePolicy, node, id)
