import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3Object } from './AwsS3Object.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/s3_object

export const InputSchema = z.object({
  __key: resolvableValue(z.string()),
  bucket: resolvableValue(z.string()),
  checksum_mode: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  range: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  body: z.string().optional(),
  bucket_key_enabled: z.boolean().optional(),
  cache_control: z.string().optional(),
  checksum_crc32: z.string().optional(),
  checksum_crc32c: z.string().optional(),
  checksum_crc64nvme: z.string().optional(),
  checksum_sha1: z.string().optional(),
  checksum_sha256: z.string().optional(),
  content_disposition: z.string().optional(),
  content_encoding: z.string().optional(),
  content_language: z.string().optional(),
  content_length: z.number().optional(),
  content_type: z.string().optional(),
  etag: z.string().optional(),
  expiration: z.string().optional(),
  expires: z.string().optional(),
  last_modified: z.string().optional(),
  metadata: z.record(z.string(), z.string()).optional(),
  object_lock_legal_hold_status: z.string().optional(),
  object_lock_mode: z.string().optional(),
  object_lock_retain_until_date: z.string().optional(),
  server_side_encryption: z.string().optional(),
  sse_kms_key_id: z.string().optional(),
  storage_class: z.string().optional(),
  version_id: z.string().optional(),
  website_redirect_location: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsS3Object(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsS3Object
      _type='aws_s3_object'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3Object = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsS3Object, node, id)

export const useDataAwsS3Objects = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsS3Object, node, id)
