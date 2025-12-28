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
  bucket: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  rule: resolvableValue(
    z.object({
      id: z.string().optional(),
      prefix: z.string().optional(),
      priority: z.number().optional(),
      status: z.string(),
      delete_marker_replication: z.object({
        status: z.string(),
      }).optional(),
      destination: z.object({
        account: z.string().optional(),
        bucket: z.string(),
        storage_class: z.string().optional(),
        access_control_translation: z.object({
          owner: z.string(),
        }).optional(),
        encryption_configuration: z.object({
          replica_kms_key_id: z.string(),
        }).optional(),
        metrics: z.object({
          status: z.string(),
          event_threshold: z.object({
            minutes: z.number(),
          }).optional(),
        }).optional(),
        replication_time: z.object({
          status: z.string(),
          time: z.object({
            minutes: z.number(),
          }),
        }).optional(),
      }),
      existing_object_replication: z.object({
        status: z.string(),
      }).optional(),
      filter: z.object({
        prefix: z.string().optional(),
        and: z.object({
          prefix: z.string().optional(),
          tags: z.record(z.string(), z.string()).optional(),
        }).optional(),
        tag: z.object({
          key: z.string(),
          value: z.string(),
        }).optional(),
      }).optional(),
      source_selection_criteria: z.object({
        replica_modifications: z.object({
          status: z.string(),
        }).optional(),
        sse_kms_encrypted_objects: z.object({
          status: z.string(),
        }).optional(),
      }).optional(),
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
  token: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_replication_configuration

export function AwsS3BucketReplicationConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_replication_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketReplicationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsS3BucketReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketReplicationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3BucketReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
