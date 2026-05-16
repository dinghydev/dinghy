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

export const AwsNetworkfirewallResourcePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsNetworkfirewallResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsNetworkfirewallResourcePolicyInputProps =
  & z.input<typeof AwsNetworkfirewallResourcePolicyInputSchema>
  & NodeProps

export type AwsNetworkfirewallResourcePolicyOutputProps =
  & z.output<typeof AwsNetworkfirewallResourcePolicyOutputSchema>
  & z.output<typeof AwsNetworkfirewallResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkfirewall_resource_policy

export function AwsNetworkfirewallResourcePolicy(
  props: Partial<AwsNetworkfirewallResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkfirewallResourcePolicyInputSchema}
      _outputSchema={AwsNetworkfirewallResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkfirewallResourcePolicyOutputProps>(
    AwsNetworkfirewallResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkfirewallResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkfirewallResourcePolicyOutputProps>(
    AwsNetworkfirewallResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
