import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkfirewallResourcePolicy } from './AwsNetworkfirewallResourcePolicy.tsx'

export const InputSchema = z.object({
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/networkfirewall_resource_policy

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
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsNetworkfirewallResourcePolicy,
    idFilter,
    baseNode,
  )

export const useDataAwsNetworkfirewallResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNetworkfirewallResourcePolicy,
    idFilter,
    baseNode,
  )
