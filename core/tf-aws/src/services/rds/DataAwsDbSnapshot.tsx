import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDbSnapshot } from './AwsDbSnapshot.tsx'

export const InputSchema = z.object({
  port: resolvableValue(z.number()),
  db_instance_identifier: resolvableValue(z.string().optional()),
  db_snapshot_identifier: resolvableValue(z.string().optional()),
  include_public: resolvableValue(z.boolean().optional()),
  include_shared: resolvableValue(z.boolean().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  snapshot_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

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
  original_snapshot_create_time: z.string().optional(),
  snapshot_create_time: z.string().optional(),
  source_db_snapshot_identifier: z.string().optional(),
  source_region: z.string().optional(),
  status: z.string().optional(),
  storage_type: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/db_snapshot

export function DataAwsDbSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDbSnapshot
      _type='aws_db_snapshot'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDbSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsDbSnapshot, idFilter, baseNode, optional)

export const useDataAwsDbSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsDbSnapshot, idFilter, baseNode, optional)
