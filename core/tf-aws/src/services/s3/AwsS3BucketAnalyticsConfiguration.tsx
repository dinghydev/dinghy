import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_analytics_configuration

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
      }),
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

export function AwsS3BucketAnalyticsConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsS3BucketAnalyticsConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3BucketAnalyticsConfiguration, node, id)

export const useAwsS3BucketAnalyticsConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsS3BucketAnalyticsConfiguration, node, id)
