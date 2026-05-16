import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessLifecyclePolicy } from './AwsOpensearchserverlessLifecyclePolicy.tsx'

export const DataAwsOpensearchserverlessLifecyclePolicyInputSchema =
  TfMetaSchema.extend({
    name: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOpensearchserverlessLifecyclePolicyOutputSchema = z.object({
  created_date: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  last_modified_date: z.string().optional(),
  policy: z.string().optional(),
  policy_version: z.string().optional(),
})

export type DataAwsOpensearchserverlessLifecyclePolicyInputProps =
  & z.input<typeof DataAwsOpensearchserverlessLifecyclePolicyInputSchema>
  & NodeProps

export type DataAwsOpensearchserverlessLifecyclePolicyOutputProps =
  & z.output<typeof DataAwsOpensearchserverlessLifecyclePolicyOutputSchema>
  & z.output<typeof DataAwsOpensearchserverlessLifecyclePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_lifecycle_policy

export function DataAwsOpensearchserverlessLifecyclePolicy(
  props: Partial<DataAwsOpensearchserverlessLifecyclePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessLifecyclePolicy
      _type='aws_opensearchserverless_lifecycle_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOpensearchserverlessLifecyclePolicyInputSchema}
      _outputSchema={DataAwsOpensearchserverlessLifecyclePolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessLifecyclePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOpensearchserverlessLifecyclePolicyOutputProps>(
    DataAwsOpensearchserverlessLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOpensearchserverlessLifecyclePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOpensearchserverlessLifecyclePolicyOutputProps>(
    DataAwsOpensearchserverlessLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )
