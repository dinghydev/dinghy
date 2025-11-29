import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/neptune_cluster_snapshot

export const InputSchema = z.object({
  db_cluster_identifier: resolvableValue(z.string()),
  db_cluster_snapshot_identifier: resolvableValue(z.string()),
  snapshot_type: resolvableValue(z.string()),
  source_db_cluster_snapshot_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  allocated_storage: z.number().optional(),
  availability_zones: z.string().array().optional(),
  db_cluster_snapshot_arn: z.string().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  kms_key_id: z.string().optional(),
  license_model: z.string().optional(),
  port: z.number().optional(),
  status: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNeptuneClusterSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_cluster_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneClusterSnapshot = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNeptuneClusterSnapshot, node, id)

export const useAwsNeptuneClusterSnapshots = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNeptuneClusterSnapshot, node, id)
