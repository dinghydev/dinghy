import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessSecurityPolicy } from './AwsOpensearchserverlessSecurityPolicy.tsx'

export const DataAwsOpensearchserverlessSecurityPolicyInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOpensearchserverlessSecurityPolicyOutputSchema = z.object({
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_modified_date: z.string().optional(),
  policy: z.string().optional(),
  policy_version: z.string().optional(),
})

export type DataAwsOpensearchserverlessSecurityPolicyInputProps =
  & z.input<typeof DataAwsOpensearchserverlessSecurityPolicyInputSchema>
  & NodeProps

export type DataAwsOpensearchserverlessSecurityPolicyOutputProps =
  & z.output<typeof DataAwsOpensearchserverlessSecurityPolicyOutputSchema>
  & z.output<typeof DataAwsOpensearchserverlessSecurityPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_security_policy

export function DataAwsOpensearchserverlessSecurityPolicy(
  props: Partial<DataAwsOpensearchserverlessSecurityPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessSecurityPolicy
      _type='aws_opensearchserverless_security_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOpensearchserverlessSecurityPolicyInputSchema}
      _outputSchema={DataAwsOpensearchserverlessSecurityPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessSecurityPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOpensearchserverlessSecurityPolicyOutputProps>(
    DataAwsOpensearchserverlessSecurityPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOpensearchserverlessSecurityPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOpensearchserverlessSecurityPolicyOutputProps>(
    DataAwsOpensearchserverlessSecurityPolicy,
    idFilter,
    baseNode,
    optional,
  )
