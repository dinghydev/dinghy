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

export const DataAwsNetworkfirewallResourcePolicyInputSchema = TfMetaSchema
  .extend({
    resource_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsNetworkfirewallResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
  policy: z.string().optional(),
})

export type DataAwsNetworkfirewallResourcePolicyInputProps =
  & z.input<typeof DataAwsNetworkfirewallResourcePolicyInputSchema>
  & NodeProps

export type DataAwsNetworkfirewallResourcePolicyOutputProps =
  & z.output<typeof DataAwsNetworkfirewallResourcePolicyOutputSchema>
  & z.output<typeof DataAwsNetworkfirewallResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkfirewall_resource_policy

export function DataAwsNetworkfirewallResourcePolicy(
  props: Partial<DataAwsNetworkfirewallResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkfirewallResourcePolicy
      _type='aws_networkfirewall_resource_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkfirewallResourcePolicyInputSchema}
      _outputSchema={DataAwsNetworkfirewallResourcePolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkfirewallResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsNetworkfirewallResourcePolicyOutputProps>(
    DataAwsNetworkfirewallResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkfirewallResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkfirewallResourcePolicyOutputProps>(
    DataAwsNetworkfirewallResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
