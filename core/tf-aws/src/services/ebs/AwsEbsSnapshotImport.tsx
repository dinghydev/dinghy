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

export const AwsEbsSnapshotImportInputSchema = TfMetaSchema.extend({
  disk_container: resolvableValue(z.object({
    description: z.string().optional(),
    format: z.string(),
    url: z.string().optional(),
    user_bucket: z.object({
      s3_bucket: z.string(),
      s3_key: z.string(),
    }).optional(),
  })),
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
})

export const AwsEbsSnapshotImportOutputSchema = z.object({
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

export type AwsEbsSnapshotImportInputProps =
  & z.input<typeof AwsEbsSnapshotImportInputSchema>
  & NodeProps

export type AwsEbsSnapshotImportOutputProps =
  & z.output<typeof AwsEbsSnapshotImportOutputSchema>
  & z.output<typeof AwsEbsSnapshotImportInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_snapshot_import

export function AwsEbsSnapshotImport(
  props: Partial<AwsEbsSnapshotImportInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot_import'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsSnapshotImportInputSchema}
      _outputSchema={AwsEbsSnapshotImportOutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsSnapshotImport = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEbsSnapshotImportOutputProps>(
    AwsEbsSnapshotImport,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEbsSnapshotImports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsSnapshotImportOutputProps>(
    AwsEbsSnapshotImport,
    idFilter,
    baseNode,
    optional,
  )
