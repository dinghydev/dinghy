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
  rule: resolvableValue(
    z.object({
      id: z.string(),
      status: z.string().optional(),
      abort_incomplete_multipart_upload: z.object({
        days_after_initiation: z.number(),
      }).optional(),
      expiration: z.object({
        date: z.string().optional(),
        days: z.number().optional(),
        expired_object_delete_marker: z.boolean().optional(),
      }).optional(),
      filter: z.object({
        prefix: z.string().optional(),
        tags: z.record(z.string(), z.string()).optional(),
      }).optional(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_bucket_lifecycle_configuration

export function AwsS3controlBucketLifecycleConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_bucket_lifecycle_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlBucketLifecycleConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsS3controlBucketLifecycleConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlBucketLifecycleConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3controlBucketLifecycleConfiguration,
    idFilter,
    baseNode,
    optional,
  )
