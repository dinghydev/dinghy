import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbAcl } from './AwsMemorydbAcl.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/memorydb_acl

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  minimum_engine_version: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user_names: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMemorydbAcl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMemorydbAcl
      _type='aws_memorydb_acl'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbAcl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMemorydbAcl, node, id)

export const useDataAwsMemorydbAcls = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMemorydbAcl, node, id)
