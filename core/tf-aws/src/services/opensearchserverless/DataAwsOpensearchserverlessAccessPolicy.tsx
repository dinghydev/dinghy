import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessAccessPolicy } from './AwsOpensearchserverlessAccessPolicy.tsx'

export const DataAwsOpensearchserverlessAccessPolicyInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOpensearchserverlessAccessPolicyOutputSchema = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  policy: z.string().optional(),
  policy_version: z.string().optional(),
})

export type DataAwsOpensearchserverlessAccessPolicyInputProps =
  & z.input<typeof DataAwsOpensearchserverlessAccessPolicyInputSchema>
  & NodeProps

export type DataAwsOpensearchserverlessAccessPolicyOutputProps =
  & z.output<typeof DataAwsOpensearchserverlessAccessPolicyOutputSchema>
  & z.output<typeof DataAwsOpensearchserverlessAccessPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_access_policy

export function DataAwsOpensearchserverlessAccessPolicy(
  props: Partial<DataAwsOpensearchserverlessAccessPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessAccessPolicy
      _type='aws_opensearchserverless_access_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOpensearchserverlessAccessPolicyInputSchema}
      _outputSchema={DataAwsOpensearchserverlessAccessPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessAccessPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOpensearchserverlessAccessPolicyOutputProps>(
    DataAwsOpensearchserverlessAccessPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOpensearchserverlessAccessPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOpensearchserverlessAccessPolicyOutputProps>(
    DataAwsOpensearchserverlessAccessPolicy,
    idFilter,
    baseNode,
    optional,
  )
