import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpclatticeAuthPolicy } from './AwsVpclatticeAuthPolicy.tsx'

export const DataAwsVpclatticeAuthPolicyInputSchema = TfMetaSchema.extend({
  resource_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsVpclatticeAuthPolicyOutputSchema = z.object({
  policy: z.string().optional(),
  state: z.string().optional(),
})

export type DataAwsVpclatticeAuthPolicyInputProps =
  & z.input<typeof DataAwsVpclatticeAuthPolicyInputSchema>
  & NodeProps

export type DataAwsVpclatticeAuthPolicyOutputProps =
  & z.output<typeof DataAwsVpclatticeAuthPolicyOutputSchema>
  & z.output<typeof DataAwsVpclatticeAuthPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpclattice_auth_policy

export function DataAwsVpclatticeAuthPolicy(
  props: Partial<DataAwsVpclatticeAuthPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpclatticeAuthPolicy
      _type='aws_vpclattice_auth_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpclatticeAuthPolicyInputSchema}
      _outputSchema={DataAwsVpclatticeAuthPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpclatticeAuthPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpclatticeAuthPolicyOutputProps>(
    DataAwsVpclatticeAuthPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpclatticeAuthPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpclatticeAuthPolicyOutputProps>(
    DataAwsVpclatticeAuthPolicy,
    idFilter,
    baseNode,
    optional,
  )
