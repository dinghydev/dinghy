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
  __key: resolvableValue(z.string()),
  bucket: resolvableValue(z.string()),
  acl: resolvableValue(z.string().optional()),
  bucket_key_enabled: resolvableValue(z.boolean().optional()),
  cache_control: resolvableValue(z.string().optional()),
  content: resolvableValue(z.string().optional()),
  content_base64: resolvableValue(z.string().optional()),
  content_disposition: resolvableValue(z.string().optional()),
  content_encoding: resolvableValue(z.string().optional()),
  content_language: resolvableValue(z.string().optional()),
  content_type: resolvableValue(z.string().optional()),
  etag: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  metadata: resolvableValue(z.record(z.string(), z.string()).optional()),
  object_lock_legal_hold_status: resolvableValue(z.string().optional()),
  object_lock_mode: resolvableValue(z.string().optional()),
  object_lock_retain_until_date: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  server_side_encryption: resolvableValue(z.string().optional()),
  source: resolvableValue(z.string().optional()),
  source_hash: resolvableValue(z.string().optional()),
  storage_class: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  website_redirect: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version_id: z.string().optional(),
})

export const ImportSchema = z.object({
  __key: resolvableValue(z.string()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_object

export function AwsS3BucketObject(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_object'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketObject = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsS3BucketObject, idFilter, baseNode)

export const useAwsS3BucketObjects = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsS3BucketObject, idFilter, baseNode)
