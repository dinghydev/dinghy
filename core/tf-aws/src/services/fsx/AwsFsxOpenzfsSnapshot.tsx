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

export const AwsFsxOpenzfsSnapshotInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  volume_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsFsxOpenzfsSnapshotOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsFsxOpenzfsSnapshotInputProps =
  & z.input<typeof AwsFsxOpenzfsSnapshotInputSchema>
  & NodeProps

export type AwsFsxOpenzfsSnapshotOutputProps =
  & z.output<typeof AwsFsxOpenzfsSnapshotOutputSchema>
  & z.output<typeof AwsFsxOpenzfsSnapshotInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/fsx_openzfs_snapshot

export function AwsFsxOpenzfsSnapshot(
  props: Partial<AwsFsxOpenzfsSnapshotInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_openzfs_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFsxOpenzfsSnapshotInputSchema}
      _outputSchema={AwsFsxOpenzfsSnapshotOutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxOpenzfsSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFsxOpenzfsSnapshotOutputProps>(
    AwsFsxOpenzfsSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxOpenzfsSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFsxOpenzfsSnapshotOutputProps>(
    AwsFsxOpenzfsSnapshot,
    idFilter,
    baseNode,
    optional,
  )
