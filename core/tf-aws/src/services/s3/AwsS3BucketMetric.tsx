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

export const AwsS3BucketMetricInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      access_point: z.string().optional(),
      prefix: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3BucketMetricOutputSchema = z.object({})

export type AwsS3BucketMetricInputProps =
  & z.input<typeof AwsS3BucketMetricInputSchema>
  & NodeProps

export type AwsS3BucketMetricOutputProps =
  & z.output<typeof AwsS3BucketMetricOutputSchema>
  & z.output<typeof AwsS3BucketMetricInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_metric

export function AwsS3BucketMetric(props: Partial<AwsS3BucketMetricInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_metric'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketMetricInputSchema}
      _outputSchema={AwsS3BucketMetricOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketMetric = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketMetricOutputProps>(
    AwsS3BucketMetric,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketMetrics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketMetricOutputProps>(
    AwsS3BucketMetric,
    idFilter,
    baseNode,
    optional,
  )
