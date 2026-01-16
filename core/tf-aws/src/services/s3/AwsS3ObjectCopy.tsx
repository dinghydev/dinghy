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

export const InputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  bucket: resolvableValue(z.string()),
  source: resolvableValue(z.string()),
  acl: resolvableValue(z.string().optional()),
  bucket_key_enabled: resolvableValue(z.boolean().optional()),
  cache_control: resolvableValue(z.string().optional()),
  checksum_algorithm: resolvableValue(z.string().optional()),
  content_disposition: resolvableValue(z.string().optional()),
  content_encoding: resolvableValue(z.string().optional()),
  content_language: resolvableValue(z.string().optional()),
  content_type: resolvableValue(z.string().optional()),
  copy_if_match: resolvableValue(z.string().optional()),
  copy_if_modified_since: resolvableValue(z.string().optional()),
  copy_if_none_match: resolvableValue(z.string().optional()),
  copy_if_unmodified_since: resolvableValue(z.string().optional()),
  customer_algorithm: resolvableValue(z.string().optional()),
  customer_key: resolvableValue(z.string().optional()),
  customer_key_md5: resolvableValue(z.string().optional()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  expected_source_bucket_owner: resolvableValue(z.string().optional()),
  expires: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  grant: resolvableValue(
    z.object({
      email: z.string().optional(),
      id: z.string().optional(),
      permissions: z.string().array(),
      type: z.string(),
      uri: z.string().optional(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  kms_encryption_context: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  metadata: resolvableValue(z.record(z.string(), z.string()).optional()),
  metadata_directive: resolvableValue(z.string().optional()),
  object_lock_legal_hold_status: resolvableValue(z.string().optional()),
  object_lock_mode: resolvableValue(z.string().optional()),
  object_lock_retain_until_date: resolvableValue(z.string().optional()),
  override_provider: resolvableValue(
    z.object({
      default_tags: z.object({
        tags: z.record(z.string(), z.string()).optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  request_payer: resolvableValue(z.string().optional()),
  server_side_encryption: resolvableValue(z.string().optional()),
  source_customer_algorithm: resolvableValue(z.string().optional()),
  source_customer_key: resolvableValue(z.string().optional()),
  source_customer_key_md5: resolvableValue(z.string().optional()),
  storage_class: resolvableValue(z.string().optional()),
  tagging_directive: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  website_redirect: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  checksum_crc32: z.string().optional(),
  checksum_crc32c: z.string().optional(),
  checksum_crc64nvme: z.string().optional(),
  checksum_sha1: z.string().optional(),
  checksum_sha256: z.string().optional(),
  etag: z.string().optional(),
  expiration: z.string().optional(),
  last_modified: z.string().optional(),
  request_charged: z.boolean().optional(),
  source_version_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3_object_copy

export function AwsS3ObjectCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_object_copy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3ObjectCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsS3ObjectCopy, idFilter, baseNode, optional)

export const useAwsS3ObjectCopys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsS3ObjectCopy, idFilter, baseNode, optional)
