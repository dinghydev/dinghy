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
  outpost_arn: resolvableValue(z.string()),
  source_region: resolvableValue(z.string()),
  source_snapshot_id: resolvableValue(z.string()),
  volume_id: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  data_encryption_key_id: z.string().optional(),
  id: z.string().optional(),
  owner_alias: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  volume_size: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ebs_snapshot_copy

export function AwsEbsSnapshotCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot_copy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsSnapshotCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEbsSnapshotCopy, idFilter, baseNode, optional)

export const useAwsEbsSnapshotCopys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsEbsSnapshotCopy, idFilter, baseNode, optional)
