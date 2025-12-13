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
  eventbridge: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  lambda_function: resolvableValue(
    z.object({
      events: z.string().array(),
      filter_prefix: z.string().optional(),
      filter_suffix: z.string().optional(),
      id: z.string().optional(),
      lambda_function_arn: z.string().optional(),
    }).array().optional(),
  ),
  queue: resolvableValue(
    z.object({
      events: z.string().array(),
      filter_prefix: z.string().optional(),
      filter_suffix: z.string().optional(),
      id: z.string().optional(),
      queue_arn: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  topic: resolvableValue(
    z.object({
      events: z.string().array(),
      filter_prefix: z.string().optional(),
      filter_suffix: z.string().optional(),
      id: z.string().optional(),
      topic_arn: z.string(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_notification

export function AwsS3BucketNotification(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_notification'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketNotification = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsS3BucketNotification, idFilter, baseNode)

export const useAwsS3BucketNotifications = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsS3BucketNotification, idFilter, baseNode)
