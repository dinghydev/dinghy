import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/db_snapshot_copy

export const InputSchema = z.object({
  port: resolvableValue(z.number()),
  snapshot_type: resolvableValue(z.string()),
  target_db_snapshot_identifier: resolvableValue(z.string()),
  copy_tags: resolvableValue(z.boolean().optional()),
  destination_region: resolvableValue(z.string().optional()),
  presigned_url: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_custom_availability_zone: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  allocated_storage: z.number().optional(),
  availability_zone: z.string().optional(),
  db_snapshot_arn: z.string().optional(),
  encrypted: z.boolean().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  id: z.string().optional(),
  iops: z.number().optional(),
  kms_key_id: z.string().optional(),
  license_model: z.string().optional(),
  option_group_name: z.string().optional(),
  shared_accounts: z.string().array().optional(),
  source_db_snapshot_identifier: z.string().optional(),
  source_region: z.string().optional(),
  storage_type: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDbSnapshotCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_snapshot_copy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDbSnapshotCopy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDbSnapshotCopy, node, id)

export const useAwsDbSnapshotCopys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDbSnapshotCopy, node, id)
