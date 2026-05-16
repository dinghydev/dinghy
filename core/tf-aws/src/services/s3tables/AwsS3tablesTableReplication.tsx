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

export const AwsS3tablesTableReplicationInputSchema = TfMetaSchema.extend({
  role: resolvableValue(z.string()),
  table_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      destination: z.object({
        destination_table_bucket_arn: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const AwsS3tablesTableReplicationOutputSchema = z.object({
  version_token: z.string().optional(),
})

export const AwsS3tablesTableReplicationImportSchema = z.object({
  table_arn: resolvableValue(z.string()),
})

export type AwsS3tablesTableReplicationInputProps =
  & z.input<typeof AwsS3tablesTableReplicationInputSchema>
  & z.input<typeof AwsS3tablesTableReplicationImportSchema>
  & NodeProps

export type AwsS3tablesTableReplicationOutputProps =
  & z.output<typeof AwsS3tablesTableReplicationOutputSchema>
  & z.output<typeof AwsS3tablesTableReplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3tables_table_replication

export function AwsS3tablesTableReplication(
  props: Partial<AwsS3tablesTableReplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_replication'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3tablesTableReplicationInputSchema}
      _outputSchema={AwsS3tablesTableReplicationOutputSchema}
      _importSchema={AwsS3tablesTableReplicationImportSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTableReplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3tablesTableReplicationOutputProps>(
    AwsS3tablesTableReplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3tablesTableReplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3tablesTableReplicationOutputProps>(
    AwsS3tablesTableReplication,
    idFilter,
    baseNode,
    optional,
  )
