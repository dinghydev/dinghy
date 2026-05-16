import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpclatticeResourcePolicy } from './AwsVpclatticeResourcePolicy.tsx'

export const DataAwsVpclatticeResourcePolicyInputSchema = TfMetaSchema.extend({
  resource_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsVpclatticeResourcePolicyOutputSchema = z.object({
  policy: z.string().optional(),
})

export type DataAwsVpclatticeResourcePolicyInputProps =
  & z.input<typeof DataAwsVpclatticeResourcePolicyInputSchema>
  & NodeProps

export type DataAwsVpclatticeResourcePolicyOutputProps =
  & z.output<typeof DataAwsVpclatticeResourcePolicyOutputSchema>
  & z.output<typeof DataAwsVpclatticeResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpclattice_resource_policy

export function DataAwsVpclatticeResourcePolicy(
  props: Partial<DataAwsVpclatticeResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpclatticeResourcePolicy
      _type='aws_vpclattice_resource_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpclatticeResourcePolicyInputSchema}
      _outputSchema={DataAwsVpclatticeResourcePolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpclatticeResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpclatticeResourcePolicyOutputProps>(
    DataAwsVpclatticeResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpclatticeResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpclatticeResourcePolicyOutputProps>(
    DataAwsVpclatticeResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
