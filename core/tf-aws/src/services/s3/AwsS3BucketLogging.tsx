import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_logging

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  target_bucket: resolvableValue(z.string()),
  target_prefix: resolvableValue(z.string()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target_grant: resolvableValue(
    z.object({
      permission: z.string(),
    }).array().optional(),
  ),
  target_object_key_format: resolvableValue(
    z.object({
      partitioned_prefix: z.object({
        partition_date_source: z.string(),
      }).optional(),
      simple_prefix: z.object({}),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3BucketLogging(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_logging'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketLogging = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3BucketLogging, node, id)

export const useAwsS3BucketLoggings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3BucketLogging, node, id)
