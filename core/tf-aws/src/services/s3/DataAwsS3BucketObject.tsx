import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3BucketObject } from './AwsS3BucketObject.tsx'

export const DataAwsS3BucketObjectInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  bucket: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  range: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  version_id: resolvableValue(z.string().optional()),
})

export const DataAwsS3BucketObjectOutputSchema = z.object({
  arn: z.string().optional(),
  body: z.string().optional(),
  bucket_key_enabled: z.boolean().optional(),
  cache_control: z.string().optional(),
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
  tags: z.record(z.string(), z.string()).optional(),
  version_id: z.string().optional(),
  website_redirect_location: z.string().optional(),
})

export type DataAwsS3BucketObjectInputProps =
  & z.input<typeof DataAwsS3BucketObjectInputSchema>
  & NodeProps

export type DataAwsS3BucketObjectOutputProps =
  & z.output<typeof DataAwsS3BucketObjectOutputSchema>
  & z.output<typeof DataAwsS3BucketObjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_bucket_object

export function DataAwsS3BucketObject(
  props: Partial<DataAwsS3BucketObjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3BucketObject
      _type='aws_s3_bucket_object'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3BucketObjectInputSchema}
      _outputSchema={DataAwsS3BucketObjectOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3BucketObject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3BucketObjectOutputProps>(
    DataAwsS3BucketObject,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3BucketObjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3BucketObjectOutputProps>(
    DataAwsS3BucketObject,
    idFilter,
    baseNode,
    optional,
  )
