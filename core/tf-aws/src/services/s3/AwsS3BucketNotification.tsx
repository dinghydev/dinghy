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

export const AwsS3BucketNotificationInputSchema = TfMetaSchema.extend({
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
})

export const AwsS3BucketNotificationOutputSchema = z.object({})

export const AwsS3BucketNotificationImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketNotificationInputProps =
  & z.input<typeof AwsS3BucketNotificationInputSchema>
  & z.input<typeof AwsS3BucketNotificationImportSchema>
  & NodeProps

export type AwsS3BucketNotificationOutputProps =
  & z.output<typeof AwsS3BucketNotificationOutputSchema>
  & z.output<typeof AwsS3BucketNotificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_notification

export function AwsS3BucketNotification(
  props: Partial<AwsS3BucketNotificationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_notification'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketNotificationInputSchema}
      _outputSchema={AwsS3BucketNotificationOutputSchema}
      _importSchema={AwsS3BucketNotificationImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketNotification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketNotificationOutputProps>(
    AwsS3BucketNotification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketNotifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketNotificationOutputProps>(
    AwsS3BucketNotification,
    idFilter,
    baseNode,
    optional,
  )
