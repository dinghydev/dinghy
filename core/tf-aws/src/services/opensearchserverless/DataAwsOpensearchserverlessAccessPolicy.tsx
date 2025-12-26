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

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  description: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/opensearchserverless_access_policy

export function DataAwsOpensearchserverlessAccessPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessAccessPolicy
      _type='aws_opensearchserverless_access_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessAccessPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsOpensearchserverlessAccessPolicy,
    idFilter,
    baseNode,
    optional,
  )
