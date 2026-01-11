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
import { BUCKET } from '@dinghy/diagrams/entitiesAwsStorage'
import { AWS_ACCOUNT } from '@dinghy/diagrams/containersAwsGroups'

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
    }).array().optional(),
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
      expiration: z.object({
        date: z.string().optional(),
        days: z.number().optional(),
        expired_object_delete_marker: z.boolean().optional(),
      }).optional(),
      noncurrent_version_expiration: z.object({
        days: z.number().optional(),
      }).optional(),
      noncurrent_version_transition: z.object({
        days: z.number().optional(),
        storage_class: z.string(),
      }).array().optional(),
      transition: z.object({
        date: z.string().optional(),
        days: z.number().optional(),
        storage_class: z.string(),
      }).array().optional(),
    }).array().optional(),
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
      rule: z.object({
        default_retention: z.object({
          days: z.number().optional(),
          mode: z.string(),
          years: z.number().optional(),
        }),
      }).optional(),
    }).optional(),
  ),
  object_lock_enabled: resolvableValue(z.boolean().optional()),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_configuration: resolvableValue(
    z.object({
      role: z.string(),
      rules: z.object({
        delete_marker_replication_status: z.string().optional(),
        id: z.string().optional(),
        prefix: z.string().optional(),
        priority: z.number().optional(),
        status: z.string(),
        destination: z.object({
          account_id: z.string().optional(),
          bucket: z.string(),
          replica_kms_key_id: z.string().optional(),
          storage_class: z.string().optional(),
          access_control_translation: z.object({
            owner: z.string(),
          }).optional(),
          metrics: z.object({
            minutes: z.number().optional(),
            status: z.string().optional(),
          }).optional(),
          replication_time: z.object({
            minutes: z.number().optional(),
            status: z.string().optional(),
          }).optional(),
        }),
        filter: z.object({
          prefix: z.string().optional(),
          tags: z.record(z.string(), z.string()).optional(),
        }).optional(),
        source_selection_criteria: z.object({
          sse_kms_encrypted_objects: z.object({
            enabled: z.boolean(),
          }).optional(),
        }).optional(),
      }).array(),
    }).optional(),
  ),
  request_payer: resolvableValue(z.string().optional()),
  server_side_encryption_configuration: resolvableValue(
    z.object({
      rule: z.object({
        bucket_key_enabled: z.boolean().optional(),
        apply_server_side_encryption_by_default: z.object({
          kms_master_key_id: z.string().optional(),
          sse_algorithm: z.string(),
        }),
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3_bucket

export function AwsS3Bucket(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsS3Bucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsS3Bucket, idFilter, baseNode, optional)

export const useAwsS3Buckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsS3Bucket, idFilter, baseNode, optional)
