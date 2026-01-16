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

export const InputSchema = TfMetaSchema.extend({
  role: resolvableValue(z.string()),
  table_bucket_arn: resolvableValue(z.string()),
  version_token: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      destination: z.object({
        destination_table_bucket_arn: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  table_bucket_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3tables_table_bucket_replication

export function AwsS3tablesTableBucketReplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_bucket_replication'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTableBucketReplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsS3tablesTableBucketReplication,
    idFilter,
    baseNode,
    optional,
  )
