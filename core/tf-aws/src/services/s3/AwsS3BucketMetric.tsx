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
      access_point: z.string().optional(),
      prefix: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3_bucket_metric

export function AwsS3BucketMetric(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_metric'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketMetric = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsS3BucketMetric, idFilter, baseNode, optional)

export const useAwsS3BucketMetrics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsS3BucketMetric, idFilter, baseNode, optional)
