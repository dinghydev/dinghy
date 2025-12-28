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
  disk_container: resolvableValue(z.object({
    description: z.string().optional(),
    format: z.string(),
    url: z.string().optional(),
    user_bucket: z.object({
      s3_bucket: z.string(),
      s3_key: z.string(),
    }).optional(),
  })),
  outpost_arn: resolvableValue(z.string()),
  volume_id: resolvableValue(z.string()),
  client_data: resolvableValue(
    z.object({
      comment: z.string().optional(),
      upload_end: z.string().optional(),
      upload_size: z.number().optional(),
      upload_start: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  encrypted: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  permanent_restore: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  role_name: resolvableValue(z.string().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ebs_snapshot_import

export function AwsEbsSnapshotImport(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot_import'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsSnapshotImport = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsEbsSnapshotImport, idFilter, baseNode, optional)

export const useAwsEbsSnapshotImports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsEbsSnapshotImport, idFilter, baseNode, optional)
