import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbSnapshot } from './AwsMemorydbSnapshot.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cluster_configuration: z.object({
    description: z.string(),
    engine: z.string(),
    engine_version: z.string(),
    maintenance_window: z.string(),
    name: z.string(),
    node_type: z.string(),
    num_shards: z.number(),
    parameter_group_name: z.string(),
    port: z.number(),
    snapshot_retention_limit: z.number(),
    snapshot_window: z.string(),
    subnet_group_name: z.string(),
    topic_arn: z.string(),
    vpc_id: z.string(),
  }).array().optional(),
  cluster_name: z.string().optional(),
  id: z.string().optional(),
  kms_key_arn: z.string().optional(),
  name: z.string().optional(),
  source: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/memorydb_snapshot

export function DataAwsMemorydbSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMemorydbSnapshot
      _type='aws_memorydb_snapshot'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbSnapshot = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsMemorydbSnapshot, idFilter, baseNode)

export const useDataAwsMemorydbSnapshots = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsMemorydbSnapshot, idFilter, baseNode)
