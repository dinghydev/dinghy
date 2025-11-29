import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { BUCKET } from '@dinghy/diagrams/entitiesAwsStorage'
import { AWS_ACCOUNT } from '@dinghy/diagrams/containersAwsGroups'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket

export const InputSchema = z.object({
  acceleration_status: resolvableValue(z.string().optional()),
  acl: resolvableValue(z.string().optional()),
  bucket: resolvableValue(z.string().optional()),
  bucket_prefix: resolvableValue(z.string().optional()),
  cors_rule: resolvableValue(
    z.object({
      allowed_headers: z.string().array().optional(),
      allowed_methods: z.string().array(),
      allowed_origins: z.string().array(),
      expose_headers: z.string().array().optional(),
      max_age_seconds: z.number().optional(),
    }).optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  grant: resolvableValue(
    z.object({
      id: z.string().optional(),
      permissions: z.string().array(),
      type: z.string(),
      uri: z.string().optional(),
    }).array().optional(),
  ),
  lifecycle_rule: resolvableValue(
    z.object({
      abort_incomplete_multipart_upload_days: z.number().optional(),
      enabled: z.boolean(),
      id: z.string().optional(),
      prefix: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
    }).optional(),
  ),
  logging: resolvableValue(
    z.object({
      target_bucket: z.string(),
      target_prefix: z.string().optional(),
    }).optional(),
  ),
  object_lock_configuration: resolvableValue(
    z.object({
      object_lock_enabled: z.string().optional(),
    }).optional(),
  ),
  object_lock_enabled: resolvableValue(z.boolean().optional()),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_configuration: resolvableValue(
    z.object({
      role: z.string(),
    }).optional(),
  ),
  request_payer: resolvableValue(z.string().optional()),
  server_side_encryption_configuration: resolvableValue(
    z.object({
      rule: z.object({
        bucket_key_enabled: z.boolean().optional(),
      }),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  versioning: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      mfa_delete: z.boolean().optional(),
    }).optional(),
  ),
  website: resolvableValue(
    z.object({
      error_document: z.string().optional(),
      index_document: z.string().optional(),
      redirect_all_requests_to: z.string().optional(),
      routing_rules: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bucket_domain_name: z.string().optional(),
  bucket_region: z.string().optional(),
  bucket_regional_domain_name: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  website_domain: z.string().optional(),
  website_endpoint: z.string().optional(),
})

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

export function AwsS3Bucket(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
      _style={extendStyle(props, BUCKET, AWS_ACCOUNT)}
    />
  )
}

export const useAwsS3Bucket = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3Bucket, node, id)

export const useAwsS3Buckets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3Bucket, node, id)
