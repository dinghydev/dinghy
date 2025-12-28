import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  kms_key_arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
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
  id: z.string().optional(),
  name: z.string().optional(),
  source: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/memorydb_snapshot

export function AwsMemorydbSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsMemorydbSnapshot, idFilter, baseNode, optional)

export const useAwsMemorydbSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsMemorydbSnapshot, idFilter, baseNode, optional)
