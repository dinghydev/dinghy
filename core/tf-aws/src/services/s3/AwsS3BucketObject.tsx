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

export const AwsS3BucketObjectInputSchema = TfMetaSchema.extend({
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
})

export const AwsS3BucketObjectOutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version_id: z.string().optional(),
})

export const AwsS3BucketObjectImportSchema = z.object({
  __key: resolvableValue(z.string()),
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketObjectInputProps =
  & z.input<typeof AwsS3BucketObjectInputSchema>
  & z.input<typeof AwsS3BucketObjectImportSchema>
  & NodeProps

export type AwsS3BucketObjectOutputProps =
  & z.output<typeof AwsS3BucketObjectOutputSchema>
  & z.output<typeof AwsS3BucketObjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_object

export function AwsS3BucketObject(props: Partial<AwsS3BucketObjectInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_object'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketObjectInputSchema}
      _outputSchema={AwsS3BucketObjectOutputSchema}
      _importSchema={AwsS3BucketObjectImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketObject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketObjectOutputProps>(
    AwsS3BucketObject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketObjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketObjectOutputProps>(
    AwsS3BucketObject,
    idFilter,
    baseNode,
    optional,
  )
