import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsFsxOpenzfsSnapshot } from './AwsFsxOpenzfsSnapshot.tsx'

export const InputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  snapshot_ids: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  snapshot_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  volume_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/fsx_openzfs_snapshot

export function DataAwsFsxOpenzfsSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsFsxOpenzfsSnapshot
      _type='aws_fsx_openzfs_snapshot'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsFsxOpenzfsSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsFsxOpenzfsSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsFsxOpenzfsSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsFsxOpenzfsSnapshot,
    idFilter,
    baseNode,
    optional,
  )
