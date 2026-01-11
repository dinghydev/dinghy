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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/opensearchserverless_security_policy

export function DataAwsOpensearchserverlessSecurityPolicy(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessSecurityPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsOpensearchserverlessSecurityPolicy,
    idFilter,
    baseNode,
    optional,
  )
