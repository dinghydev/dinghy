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

export const AwsS3BucketLifecycleConfigurationInputSchema = TfMetaSchema.extend(
  {
    bucket: resolvableValue(z.string()),
    expected_bucket_owner: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    rule: resolvableValue(
      z.object({
        id: z.string(),
        prefix: z.string().optional(),
        status: z.string(),
        abort_incomplete_multipart_upload: z.object({
          days_after_initiation: z.number().optional(),
        }).array().optional(),
        expiration: z.object({
          date: z.string().optional(),
          days: z.number().optional(),
          expired_object_delete_marker: z.boolean().optional(),
        }).array().optional(),
        filter: z.object({
          object_size_greater_than: z.number().optional(),
          object_size_less_than: z.number().optional(),
          prefix: z.string().optional(),
          and: z.object({
            object_size_greater_than: z.number().optional(),
            object_size_less_than: z.number().optional(),
            prefix: z.string().optional(),
            tags: z.record(z.string(), z.string()).optional(),
          }).array().optional(),
          tag: z.object({
            key: z.string(),
            value: z.string(),
          }).array().optional(),
        }).array().optional(),
        noncurrent_version_expiration: z.object({
          newer_noncurrent_versions: z.number().optional(),
          noncurrent_days: z.number(),
        }).array().optional(),
        noncurrent_version_transition: z.object({
          newer_noncurrent_versions: z.number().optional(),
          noncurrent_days: z.number(),
          storage_class: z.string(),
        }).array().optional(),
        transition: z.object({
          date: z.string().optional(),
          days: z.number().optional(),
          storage_class: z.string(),
        }).array().optional(),
      }).array().optional(),
    ),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
    transition_default_minimum_object_size: resolvableValue(
      z.string().optional(),
    ),
  },
)

export const AwsS3BucketLifecycleConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsS3BucketLifecycleConfigurationImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketLifecycleConfigurationInputProps =
  & z.input<typeof AwsS3BucketLifecycleConfigurationInputSchema>
  & z.input<typeof AwsS3BucketLifecycleConfigurationImportSchema>
  & NodeProps

export type AwsS3BucketLifecycleConfigurationOutputProps =
  & z.output<typeof AwsS3BucketLifecycleConfigurationOutputSchema>
  & z.output<typeof AwsS3BucketLifecycleConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_lifecycle_configuration

export function AwsS3BucketLifecycleConfiguration(
  props: Partial<AwsS3BucketLifecycleConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_lifecycle_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketLifecycleConfigurationInputSchema}
      _outputSchema={AwsS3BucketLifecycleConfigurationOutputSchema}
      _importSchema={AwsS3BucketLifecycleConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketLifecycleConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketLifecycleConfigurationOutputProps>(
    AwsS3BucketLifecycleConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketLifecycleConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketLifecycleConfigurationOutputProps>(
    AwsS3BucketLifecycleConfiguration,
    idFilter,
    baseNode,
    optional,
  )
