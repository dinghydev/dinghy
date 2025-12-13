import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDbClusterSnapshot } from './AwsDbClusterSnapshot.tsx'

export const InputSchema = z.object({
  source_db_cluster_snapshot_arn: resolvableValue(z.string()),
  db_cluster_identifier: resolvableValue(z.string().optional()),
  db_cluster_snapshot_identifier: resolvableValue(z.string().optional()),
  include_public: resolvableValue(z.boolean().optional()),
  include_shared: resolvableValue(z.boolean().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  snapshot_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  allocated_storage: z.number().optional(),
  availability_zones: z.string().array().optional(),
  db_cluster_identifier: z.string().optional(),
  db_cluster_snapshot_arn: z.string().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  license_model: z.string().optional(),
  port: z.number().optional(),
  snapshot_create_time: z.string().optional(),
  status: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/db_cluster_snapshot

export function DataAwsDbClusterSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDbClusterSnapshot
      _type='aws_db_cluster_snapshot'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDbClusterSnapshot = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsDbClusterSnapshot, idFilter, baseNode)

export const useDataAwsDbClusterSnapshots = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsDbClusterSnapshot, idFilter, baseNode)
