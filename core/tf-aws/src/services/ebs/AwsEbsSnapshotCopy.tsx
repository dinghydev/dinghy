import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ebs_snapshot_copy

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
})

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

export function AwsEbsSnapshotCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsEbsSnapshotCopy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEbsSnapshotCopy, node, id)

export const useAwsEbsSnapshotCopys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEbsSnapshotCopy, node, id)
