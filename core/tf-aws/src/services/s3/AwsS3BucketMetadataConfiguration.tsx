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
  bucket: resolvableValue(z.string()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  metadata_configuration: resolvableValue(
    z.object({
      destination: z.object({
        table_bucket_arn: z.string(),
        table_bucket_type: z.string(),
        table_namespace: z.string(),
      }).array().optional(),
      inventory_table_configuration: z.object({
        configuration_state: z.string(),
        table_arn: z.string().optional(),
        table_name: z.string().optional(),
        encryption_configuration: z.object({
          kms_key_arn: z.string().optional(),
          sse_algorithm: z.string(),
        }).array().optional(),
      }).array().optional(),
      journal_table_configuration: z.object({
        table_arn: z.string().optional(),
        table_name: z.string().optional(),
        encryption_configuration: z.object({
          kms_key_arn: z.string().optional(),
          sse_algorithm: z.string(),
        }).array().optional(),
        record_expiration: z.object({
          days: z.number().optional(),
          expiration: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3_bucket_metadata_configuration

export function AwsS3BucketMetadataConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_metadata_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketMetadataConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsS3BucketMetadataConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketMetadataConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3BucketMetadataConfiguration,
    idFilter,
    baseNode,
    optional,
  )
