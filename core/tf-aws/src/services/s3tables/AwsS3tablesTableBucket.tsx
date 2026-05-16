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

export const AwsS3tablesTableBucketInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
      sse_algorithm: z.string(),
    }).optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  maintenance_configuration: resolvableValue(
    z.object({
      iceberg_unreferenced_file_removal: z.object({
        settings: z.object({
          non_current_days: z.number(),
          unreferenced_days: z.number(),
        }),
        status: z.string(),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsS3tablesTableBucketOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsS3tablesTableBucketImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsS3tablesTableBucketInputProps =
  & z.input<typeof AwsS3tablesTableBucketInputSchema>
  & z.input<typeof AwsS3tablesTableBucketImportSchema>
  & NodeProps

export type AwsS3tablesTableBucketOutputProps =
  & z.output<typeof AwsS3tablesTableBucketOutputSchema>
  & z.output<typeof AwsS3tablesTableBucketInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3tables_table_bucket

export function AwsS3tablesTableBucket(
  props: Partial<AwsS3tablesTableBucketInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3tablesTableBucketInputSchema}
      _outputSchema={AwsS3tablesTableBucketOutputSchema}
      _importSchema={AwsS3tablesTableBucketImportSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTableBucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3tablesTableBucketOutputProps>(
    AwsS3tablesTableBucket,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3tablesTableBuckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3tablesTableBucketOutputProps>(
    AwsS3tablesTableBucket,
    idFilter,
    baseNode,
    optional,
  )
