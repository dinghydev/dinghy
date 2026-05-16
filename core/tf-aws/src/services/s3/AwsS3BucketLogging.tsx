import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { CLOUD_LOGGING } from '@dinghy/diagrams/entitiesGcpIconsManagementTools'

export const AwsS3BucketLoggingInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  target_bucket: resolvableValue(z.string()),
  target_prefix: resolvableValue(z.string()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target_grant: resolvableValue(
    z.object({
      permission: z.string(),
      grantee: z.object({
        display_name: z.string().optional(),
        email_address: z.string().optional(),
        id: z.string().optional(),
        type: z.string(),
        uri: z.string().optional(),
      }),
    }).array().optional(),
  ),
  target_object_key_format: resolvableValue(
    z.object({
      partitioned_prefix: z.object({
        partition_date_source: z.string(),
      }).optional(),
      simple_prefix: z.object({}).optional(),
    }).optional(),
  ),
})

export const AwsS3BucketLoggingOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsS3BucketLoggingImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketLoggingInputProps =
  & z.input<typeof AwsS3BucketLoggingInputSchema>
  & z.input<typeof AwsS3BucketLoggingImportSchema>
  & NodeProps

export type AwsS3BucketLoggingOutputProps =
  & z.output<typeof AwsS3BucketLoggingOutputSchema>
  & z.output<typeof AwsS3BucketLoggingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_logging

export function AwsS3BucketLogging(
  props: Partial<AwsS3BucketLoggingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_logging'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketLoggingInputSchema}
      _outputSchema={AwsS3BucketLoggingOutputSchema}
      _importSchema={AwsS3BucketLoggingImportSchema}
      {...props}
      _style={extendStyle(props, CLOUD_LOGGING)}
    />
  )
}

export const useAwsS3BucketLogging = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketLoggingOutputProps>(
    AwsS3BucketLogging,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketLoggings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketLoggingOutputProps>(
    AwsS3BucketLogging,
    idFilter,
    baseNode,
    optional,
  )
