import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { CLOUD_LOGGING } from '@dinghy/diagrams/entitiesGcpIconsManagementTools'

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  target_bucket: resolvableValue(z.string()),
  target_prefix: resolvableValue(z.string()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target_grant: resolvableValue(
    z.object({
      permission: z.string(),
      grantee: z.object({
        display_name: z.string(),
        email_address: z.string().optional(),
        id: z.string().optional(),
        type: z.string(),
        uri: z.string().optional(),
      }),
    }).array().optional(),
  ),
  target_object_key_format: resolvableValue(
    z.object({
      partitioned_prefix: z.object({
        partition_date_source: z.string(),
      }).optional(),
      simple_prefix: z.object({}).optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_logging

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
      _style={extendStyle(props, CLOUD_LOGGING)}
    />
  )
}

export const useAwsS3BucketLogging = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsS3BucketLogging, idFilter, baseNode)

export const useAwsS3BucketLoggings = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsS3BucketLogging, idFilter, baseNode)
