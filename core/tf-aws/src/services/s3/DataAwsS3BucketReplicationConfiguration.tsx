import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3BucketReplicationConfiguration } from './AwsS3BucketReplicationConfiguration.tsx'

export const DataAwsS3BucketReplicationConfigurationInputSchema = TfMetaSchema
  .extend({
    bucket: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsS3BucketReplicationConfigurationOutputSchema = z.object({
  role: z.string().optional(),
  rule: z.object({
    delete_marker_replication: z.object({
      status: z.string(),
    }).array(),
    destination: z.object({
      access_control_translation: z.object({
        owner: z.string(),
      }).array(),
      account: z.string(),
      bucket: z.string(),
      encryption_configuration: z.object({
        replica_kms_key_id: z.string(),
      }).array(),
      metrics: z.object({
        event_threshold: z.object({
          minutes: z.number(),
        }).array(),
        status: z.string(),
      }).array(),
      replication_time: z.object({
        status: z.string(),
        time: z.object({
          minutes: z.number(),
        }).array(),
      }).array(),
      storage_class: z.string(),
    }).array(),
    existing_object_replication: z.object({
      status: z.string(),
    }).array(),
    filter: z.object({
      and: z.object({
        prefix: z.string(),
        tag: z.object({
          key: z.string(),
          value: z.string(),
        }).array(),
      }).array(),
      prefix: z.string(),
      tag: z.object({
        key: z.string(),
        value: z.string(),
      }).array(),
    }).array(),
    id: z.string(),
    prefix: z.string(),
    priority: z.number(),
    source_selection_criteria: z.object({
      replica_modifications: z.object({
        status: z.string(),
      }).array(),
      sse_kms_encrypted_objects: z.object({
        status: z.string(),
      }).array(),
    }).array(),
    status: z.string(),
  }).array().optional(),
})

export type DataAwsS3BucketReplicationConfigurationInputProps =
  & z.input<typeof DataAwsS3BucketReplicationConfigurationInputSchema>
  & NodeProps

export type DataAwsS3BucketReplicationConfigurationOutputProps =
  & z.output<typeof DataAwsS3BucketReplicationConfigurationOutputSchema>
  & z.output<typeof DataAwsS3BucketReplicationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_bucket_replication_configuration

export function DataAwsS3BucketReplicationConfiguration(
  props: Partial<DataAwsS3BucketReplicationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3BucketReplicationConfiguration
      _type='aws_s3_bucket_replication_configuration'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3BucketReplicationConfigurationInputSchema}
      _outputSchema={DataAwsS3BucketReplicationConfigurationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3BucketReplicationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3BucketReplicationConfigurationOutputProps>(
    DataAwsS3BucketReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3BucketReplicationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3BucketReplicationConfigurationOutputProps>(
    DataAwsS3BucketReplicationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
