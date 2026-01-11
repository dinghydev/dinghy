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

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_modified_date: z.string().optional(),
  policy: z.string().optional(),
  policy_version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/opensearchserverless_lifecycle_policy

export function DataAwsOpensearchserverlessLifecyclePolicy(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessLifecyclePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsOpensearchserverlessLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )
