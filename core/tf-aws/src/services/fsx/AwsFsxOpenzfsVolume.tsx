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
  name: resolvableValue(z.string()),
  parent_volume_id: resolvableValue(z.string()),
  copy_tags_to_snapshots: resolvableValue(z.boolean().optional()),
  data_compression_type: resolvableValue(z.string().optional()),
  delete_volume_options: resolvableValue(z.string().array().optional()),
  nfs_exports: resolvableValue(
    z.object({
      client_configurations: z.object({
        clients: z.string(),
        options: z.string().array(),
      }).array(),
    }).optional(),
  ),
  origin_snapshot: resolvableValue(
    z.object({
      copy_strategy: z.string(),
      snapshot_arn: z.string(),
    }).optional(),
  ),
  read_only: resolvableValue(z.boolean().optional()),
  record_size_kib: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  storage_capacity_quota_gib: resolvableValue(z.number().optional()),
  storage_capacity_reservation_gib: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_and_group_quotas: resolvableValue(
    z.object({
      id: z.number(),
      storage_capacity_quota_gib: z.number(),
      type: z.string(),
    }).array().optional(),
  ),
  volume_type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fsx_openzfs_volume

export function AwsFsxOpenzfsVolume(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_openzfs_volume'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxOpenzfsVolume = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsFsxOpenzfsVolume, idFilter, baseNode)

export const useAwsFsxOpenzfsVolumes = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsFsxOpenzfsVolume, idFilter, baseNode)
