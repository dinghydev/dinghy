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

export const AwsDbSnapshotInputSchema = TfMetaSchema.extend({
  db_instance_identifier: resolvableValue(z.string()),
  db_snapshot_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  shared_accounts: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDbSnapshotOutputSchema = z.object({
  allocated_storage: z.number().optional(),
  availability_zone: z.string().optional(),
  db_snapshot_arn: z.string().optional(),
  encrypted: z.boolean().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  iops: z.number().optional(),
  kms_key_id: z.string().optional(),
  license_model: z.string().optional(),
  option_group_name: z.string().optional(),
  port: z.number().optional(),
  snapshot_type: z.string().optional(),
  source_db_snapshot_identifier: z.string().optional(),
  source_region: z.string().optional(),
  status: z.string().optional(),
  storage_type: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsDbSnapshotInputProps =
  & z.input<typeof AwsDbSnapshotInputSchema>
  & NodeProps

export type AwsDbSnapshotOutputProps =
  & z.output<typeof AwsDbSnapshotOutputSchema>
  & z.output<typeof AwsDbSnapshotInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_snapshot

export function AwsDbSnapshot(props: Partial<AwsDbSnapshotInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbSnapshotInputSchema}
      _outputSchema={AwsDbSnapshotOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbSnapshotOutputProps>(
    AwsDbSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbSnapshotOutputProps>(
    AwsDbSnapshot,
    idFilter,
    baseNode,
    optional,
  )
