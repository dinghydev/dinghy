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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3_bucket_lifecycle_configuration

export function AwsS3BucketLifecycleConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_lifecycle_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketLifecycleConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsS3BucketLifecycleConfiguration,
    idFilter,
    baseNode,
    optional,
  )
