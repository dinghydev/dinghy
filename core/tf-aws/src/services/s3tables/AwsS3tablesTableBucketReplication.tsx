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

export const AwsS3tablesTableBucketReplicationInputSchema = TfMetaSchema.extend(
  {
    role: resolvableValue(z.string()),
    table_bucket_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    rule: resolvableValue(
      z.object({
        destination: z.object({
          destination_table_bucket_arn: z.string(),
        }).array().optional(),
      }).array().optional(),
    ),
  },
)

export const AwsS3tablesTableBucketReplicationOutputSchema = z.object({
  version_token: z.string().optional(),
})

export const AwsS3tablesTableBucketReplicationImportSchema = z.object({
  table_bucket_arn: resolvableValue(z.string()),
})

export type AwsS3tablesTableBucketReplicationInputProps =
  & z.input<typeof AwsS3tablesTableBucketReplicationInputSchema>
  & z.input<typeof AwsS3tablesTableBucketReplicationImportSchema>
  & NodeProps

export type AwsS3tablesTableBucketReplicationOutputProps =
  & z.output<typeof AwsS3tablesTableBucketReplicationOutputSchema>
  & z.output<typeof AwsS3tablesTableBucketReplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3tables_table_bucket_replication

export function AwsS3tablesTableBucketReplication(
  props: Partial<AwsS3tablesTableBucketReplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_bucket_replication'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3tablesTableBucketReplicationInputSchema}
      _outputSchema={AwsS3tablesTableBucketReplicationOutputSchema}
      _importSchema={AwsS3tablesTableBucketReplicationImportSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTableBucketReplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3tablesTableBucketReplicationOutputProps>(
    AwsS3tablesTableBucketReplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3tablesTableBucketReplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3tablesTableBucketReplicationOutputProps>(
    AwsS3tablesTableBucketReplication,
    idFilter,
    baseNode,
    optional,
  )
