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
  name: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      prefix: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  storage_class_analysis: resolvableValue(
    z.object({
      data_export: z.object({
        output_schema_version: z.string().optional(),
        destination: z.object({
          s3_bucket_destination: z.object({
            bucket_account_id: z.string().optional(),
            bucket_arn: z.string(),
            format: z.string().optional(),
            prefix: z.string().optional(),
          }),
        }),
      }),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_analytics_configuration

export function AwsS3BucketAnalyticsConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_analytics_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketAnalyticsConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsS3BucketAnalyticsConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketAnalyticsConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3BucketAnalyticsConfiguration,
    idFilter,
    baseNode,
    optional,
  )
