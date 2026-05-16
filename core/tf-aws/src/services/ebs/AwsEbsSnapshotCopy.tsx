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

export const AwsEbsSnapshotCopyInputSchema = TfMetaSchema.extend({
  source_region: resolvableValue(z.string()),
  source_snapshot_id: resolvableValue(z.string()),
  completion_duration_minutes: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  encrypted: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  permanent_restore: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  storage_tier: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  temporary_restore_days: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEbsSnapshotCopyOutputSchema = z.object({
  arn: z.string().optional(),
  data_encryption_key_id: z.string().optional(),
  id: z.string().optional(),
  outpost_arn: z.string().optional(),
  owner_alias: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  volume_id: z.string().optional(),
  volume_size: z.number().optional(),
})

export type AwsEbsSnapshotCopyInputProps =
  & z.input<typeof AwsEbsSnapshotCopyInputSchema>
  & NodeProps

export type AwsEbsSnapshotCopyOutputProps =
  & z.output<typeof AwsEbsSnapshotCopyOutputSchema>
  & z.output<typeof AwsEbsSnapshotCopyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_snapshot_copy

export function AwsEbsSnapshotCopy(
  props: Partial<AwsEbsSnapshotCopyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot_copy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsSnapshotCopyInputSchema}
      _outputSchema={AwsEbsSnapshotCopyOutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsSnapshotCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEbsSnapshotCopyOutputProps>(
    AwsEbsSnapshotCopy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEbsSnapshotCopys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsSnapshotCopyOutputProps>(
    AwsEbsSnapshotCopy,
    idFilter,
    baseNode,
    optional,
  )
