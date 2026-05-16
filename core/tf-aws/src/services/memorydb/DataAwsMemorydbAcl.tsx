import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbAcl } from './AwsMemorydbAcl.tsx'

export const DataAwsMemorydbAclInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMemorydbAclOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  minimum_engine_version: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user_names: z.set(z.string()).optional(),
})

export type DataAwsMemorydbAclInputProps =
  & z.input<typeof DataAwsMemorydbAclInputSchema>
  & NodeProps

export type DataAwsMemorydbAclOutputProps =
  & z.output<typeof DataAwsMemorydbAclOutputSchema>
  & z.output<typeof DataAwsMemorydbAclInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/memorydb_acl

export function DataAwsMemorydbAcl(
  props: Partial<DataAwsMemorydbAclInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMemorydbAcl
      _type='aws_memorydb_acl'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMemorydbAclInputSchema}
      _outputSchema={DataAwsMemorydbAclOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMemorydbAclOutputProps>(
    DataAwsMemorydbAcl,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMemorydbAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMemorydbAclOutputProps>(
    DataAwsMemorydbAcl,
    idFilter,
    baseNode,
    optional,
  )
