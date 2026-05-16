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

export const AwsEbsSnapshotInputSchema = TfMetaSchema.extend({
  volume_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  outpost_arn: resolvableValue(z.string().optional()),
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

export const AwsEbsSnapshotOutputSchema = z.object({
  arn: z.string().optional(),
  data_encryption_key_id: z.string().optional(),
  encrypted: z.boolean().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  owner_alias: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  volume_size: z.number().optional(),
})

export type AwsEbsSnapshotInputProps =
  & z.input<typeof AwsEbsSnapshotInputSchema>
  & NodeProps

export type AwsEbsSnapshotOutputProps =
  & z.output<typeof AwsEbsSnapshotOutputSchema>
  & z.output<typeof AwsEbsSnapshotInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_snapshot

export function AwsEbsSnapshot(props: Partial<AwsEbsSnapshotInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsSnapshotInputSchema}
      _outputSchema={AwsEbsSnapshotOutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEbsSnapshotOutputProps>(
    AwsEbsSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEbsSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsSnapshotOutputProps>(
    AwsEbsSnapshot,
    idFilter,
    baseNode,
    optional,
  )
