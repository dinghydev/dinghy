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
  format: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  namespace: resolvableValue(z.string()),
  table_bucket_arn: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
      sse_algorithm: z.string(),
    }).optional(),
  ),
  maintenance_configuration: resolvableValue(
    z.object({
      iceberg_compaction: z.object({
        settings: z.object({
          target_file_size_mb: z.number(),
        }),
        status: z.string(),
      }),
      iceberg_snapshot_management: z.object({
        settings: z.object({
          max_snapshot_age_hours: z.number(),
          min_snapshots_to_keep: z.number(),
        }),
        status: z.string(),
      }),
    }).optional(),
  ),
  metadata: resolvableValue(
    z.object({
      iceberg: z.object({
        schema: z.object({
          field: z.object({
            name: z.string(),
            required: z.boolean().optional(),
            type: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  metadata_location: z.string().optional(),
  modified_at: z.string().optional(),
  modified_by: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  version_token: z.string().optional(),
  warehouse_location: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3tables_table

export function AwsS3tablesTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsS3tablesTable, idFilter, baseNode, optional)

export const useAwsS3tablesTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsS3tablesTable, idFilter, baseNode, optional)
